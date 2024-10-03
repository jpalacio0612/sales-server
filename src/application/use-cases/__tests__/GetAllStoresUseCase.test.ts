import { Store } from "../../../domain/entities/Store";
import { StoreRepository } from "../../../domain/repositories/StoreRepository";
import { GetAllStoresUseCase } from "../GetAllStoresUseCase";

const mockStore: Store = {
  id: 1,
  name: "mock store 1",
  created_at: new Date("2021-01-01T00:00:00.000Z"),
  updated_at: new Date("2021-01-01T00:00:00.000Z"),
};

class MockSalesRepository implements StoreRepository {
  private mockStores: Store[] = [mockStore];

  async findAll(): Promise<Store[]> {
    return this.mockStores;
  }

  async findById(id: number): Promise<Store | null> {
    return this.mockStores.find((store) => store.id === id) || null;
  }

  async create(store: Store): Promise<Store> {
    this.mockStores.push(store);
    return store;
  }

  async update(id: number, store: Partial<Store>): Promise<Store> {
    const index = this.mockStores.findIndex((store) => store.id === id);
    this.mockStores[index] = { ...this.mockStores[index], ...store };
    return this.mockStores[index];
  }

  async delete(id: number): Promise<void> {
    this.mockStores = this.mockStores.filter((store) => store.id !== id);
  }
}

describe("GetAllStoresUseCase", () => {
  it("should return all stores", async () => {
    const storeRepository = new MockSalesRepository();
    const useCase = new GetAllStoresUseCase(storeRepository);

    const stores = await useCase.execute();

    expect(stores).toEqual([mockStore]);
  });
});
