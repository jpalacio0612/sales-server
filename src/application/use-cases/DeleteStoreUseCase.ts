import { StoreRepository } from "../../domain/repositories/StoreRepository";

export class DeleteStoreUseCase {
  constructor(private storeRepository: StoreRepository) {}

  async execute(id: number): Promise<void> {
    return this.storeRepository.delete(id);
  }
}
