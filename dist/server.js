"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const prisma_1 = require("./lib/prisma");
const port = Number(process.env.PORT) || 7000;
const startServer = async () => {
    try {
        await prisma_1.prisma.$connect();
        console.log("Database connected");
        app_1.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
void startServer();
