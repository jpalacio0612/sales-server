import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repositories/StoreRepository";

export class CreateStoreUseCase {
  constructor(private storeRepository: StoreRepository) {}

  async execute(store: Store): Promise<Store> {
    return this.storeRepository.create(store);
  }
}
