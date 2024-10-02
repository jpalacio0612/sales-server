import db from "./knex";
import { Store } from "../../../domain/entities/Store";
import { StoreRepository } from "../../../domain/repositories/StoreRepository";

export class KnexStoreRepository implements StoreRepository {
  async findAll(): Promise<Store[]> {
    const rows = await db("stores").select("*");

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      created_at: row.created_at,
      updated_at: row.updated_at,
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
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  async create(store: Store): Promise<Store> {
    const result: Store[] = await db("stores")
      .returning(["id", "name", "created_at", "updated_at"])
      .insert({
        name: store.name,
      });

    return {
      id: result[0].id,
      name: result[0].name,
      created_at: result[0].created_at,
      updated_at: result[0].updated_at,
    };
  }

  async update(id: number, store: Partial<Store>): Promise<Store> {
    const result: Store[] = await db("stores")
      .where({ id })
      .returning(["id", "name", "created_at", "updated_at"])
      .update({
        ...store,
      });

    return {
      id: result[0].id,
      name: result[0].name,
      created_at: result[0].created_at,
      updated_at: result[0].updated_at,
    };
  }

  async delete(id: number): Promise<void> {
    await db("stores").where({ id }).delete();
  }
}
