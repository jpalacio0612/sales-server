import { Request, Response } from "express";
import { KnexStoreRepository } from "../database/knex/KnexRepository";
import { GetAllStoresUseCase } from "../../application/use-cases/GetAllStoresUseCase";

export class StoreController {
  static async getAllStores(req: Request, res: Response) {
    const repository = new KnexStoreRepository();
    const useCase = new GetAllStoresUseCase(repository);

    try {
      const stores = await useCase.execute();

      res.status(200).json(stores);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
