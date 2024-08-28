import express, { Application } from "express";
import { createConnection } from "typeorm";
import userRoutes from "./routes/userRoutes";
import organizationRoutes from "./routes/organizationRoutes";
import itemRoutes from "./routes/itemRoutes";
import ormconfig from "./config/ormconfig";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", userRoutes);
app.use("/organization", organizationRoutes);
app.use("/item", itemRoutes);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
);

export default app;

const startServer = async () => {
  try {
    await createConnection(ormconfig);
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

startServer();
