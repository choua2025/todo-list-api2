import "dotenv/config";
import { app } from "./app";
import { prisma } from "./lib/prisma";

const port = Number(process.env.PORT) || 9000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

void startServer();
