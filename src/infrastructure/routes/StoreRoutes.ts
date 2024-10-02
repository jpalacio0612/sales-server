import { Router } from "express";
import { StoreController } from "../controllers/StoreController";

const router = Router();

router.get("/", StoreController.getAllStores);

export default router;
