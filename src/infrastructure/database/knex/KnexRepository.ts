import db from "./knex";
import { Store } from "../../../domain/entities/Store";
import { StoreRepository } from "../../../domain/repositories/StoreRepository";

export class KnexStoreRepository implements StoreRepository {
  async findAll(): Promise<Store[]> {
    const rows = await db("stores").select("*");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  async findById(id: number): Promise<Store | null> {
    const row = await db("stores").where({ id }).first();

    if (!row) {
      return null;
    }

    return {
      id: row.id,
      name: row.name,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async create(store: Store): Promise<Store> {
    const [id] = await db("stores").insert({
      name: store.name,
    });

    return {
      id,
      name: store.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async update(store: Store): Promise<Store> {
    await db("stores").where({ id: store.id }).update({
      name: store.name,
      updated_at: new Date(),
    });

    return {
      ...store,
      updatedAt: new Date(),
    };
  }

  async delete(id: number): Promise<void> {
    await db("stores").where({ id }).delete();
  }
}
