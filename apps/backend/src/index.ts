import { prismaClient } from "@repo/db/client";
import express from "express";

const app = express();

app.use(express.json());

async function startServer() {
  try {
    await prismaClient.$connect();
    console.log("Connected to db");
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("failed to connect DB : ", error);
    process.exit(1);
  }
}

startServer();
