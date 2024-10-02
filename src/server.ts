import "dotenv/config";
import express, { Request, Response } from "express";
import storesRouter from "./infrastructure/routes/StoreRoutes";

const app = express();

app.use(express.json());

app.use("/stores", storesRouter);

app.use("/health-check", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
