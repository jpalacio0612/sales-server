import { Router } from "express";
import { StoreController } from "../controllers/StoreController";

const router = Router();

router.get("/", StoreController.getAllStores);
router.get("/:id", StoreController.getStoreById);
router.post("/", StoreController.createStore);
router.put("/:id", StoreController.updateStore);
router.delete("/:id", StoreController.deleteStore);

export default router;
