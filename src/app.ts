// src/app.ts
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Pool } from "pg";
import eventRoutes from "./routes/eventRoutes";
import { Request, Response, NextFunction } from "express";

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Logger simple pour les requêtes
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/events", eventRoutes);

// Créer une connexion à la base de données
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
});

// Fonction pour tester la connexion
export const testDatabaseConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("✅ Database connected successfully");
    client.release();
    return true;
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    return false;
  }
};

export default app;
