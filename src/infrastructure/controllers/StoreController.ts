import { Request, Response } from "express";
import { KnexStoreRepository } from "../database/knex/KnexRepository";
import { GetAllStoresUseCase } from "../../application/use-cases/GetAllStoresUseCase";
import { GetStoreByIdUseCase } from "../../application/use-cases/GetStoreByIdUseCase";
import { CreateStoreUseCase } from "../../application/use-cases/CreateStoreUseCase";
import { UpdateStoreUseCase } from "../../application/use-cases/UpdateStoreUseCase";
import { DeleteStoreUseCase } from "../../application/use-cases/DeleteStoreUseCase";

export class StoreController {
  static async getAllStores(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new GetAllStoresUseCase(repository);

    try {
      const stores = await useCase.execute();

      res.status(200).json(stores);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getStoreById(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new GetStoreByIdUseCase(repository);

    try {
      const store = await useCase.execute(Number(req.params.id));

      if (!store) {
        res.status(404).json({ message: "Store not found" });
      }

      res.status(200).json(store);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createStore(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new CreateStoreUseCase(repository);

    try {
      const store = await useCase.execute(req.body);

      res.status(201).json(store);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updateStore(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new UpdateStoreUseCase(repository);

    try {
      const store = await useCase.execute(Number(req.params.id), req.body);

      res.status(200).json(store);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteStore(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new DeleteStoreUseCase(repository);

    try {
      await useCase.execute(Number(req.params.id));

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
