import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repositories/StoreRepository";

export class UpdateStoreUseCase {
  constructor(private storeRepository: StoreRepository) {}

  async execute(id: number, store: Partial<Store>): Promise<Store> {
    return this.storeRepository.update(id, store);
  }
}
