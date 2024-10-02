import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repositories/StoreRepository";

export class GetStoreByIdUseCase {
  constructor(private storeRepository: StoreRepository) {}

  async execute(id: number): Promise<Store | null> {
    return this.storeRepository.findById(id);
  }
}
