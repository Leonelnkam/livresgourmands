import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("✅ Connexion MySQL réussie !");
} catch (error) {
  console.error("❌ Erreur connexion MySQL :", error);
}

export default sequelize;
