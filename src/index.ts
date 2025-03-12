import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql";

import eventRoutes from "./routes/eventRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Pour pouvoir traiter le JSON

app.use("/api/events", eventRoutes);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306"),
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Database connected successfully");
  }
});

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize connected successfully");
    return sequelize.sync({ alter: true }); // Synchronise les modèles avec la base de données
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to Sequelize:", error);
  }); */
