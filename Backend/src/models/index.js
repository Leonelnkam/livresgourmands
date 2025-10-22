import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

// Exemple de modèle User minimal
const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM("client", "editeur", "gestionnaire", "administrateur"),
    defaultValue: "client"
  },
  actif: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
  tableName: "users",
  timestamps: true,
});

export { sequelize, User };
