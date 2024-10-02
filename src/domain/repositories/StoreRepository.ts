import { Store } from "../entities/Store";

export interface StoreRepository {
  findAll(): Promise<Store[]>;
  findById(id: number): Promise<Store | null>;
  create(store: Store): Promise<Store>;
  update(id: number, store: Partial<Store>): Promise<Store>;
  delete(id: number): Promise<void>;
}
