import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./models/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur LivresGourmands API 🍰" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Base de données synchronisée !");
  } catch (error) {
    console.error("❌ Erreur synchronisation DB :", error);
  }
});
