import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repositories/StoreRepository";

export class GetAllStoresUseCase {
  constructor(private storeRepository: StoreRepository) {}

  async execute(): Promise<Store[]> {
    return this.storeRepository.findAll();
  }
}
