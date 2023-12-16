import express from "express";
import registerRoutes from "./routes";
import { sequelize } from "./db/db";
require("dotenv").config();

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(registerRoutes);

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is listening on port ${PORT}`);
});
