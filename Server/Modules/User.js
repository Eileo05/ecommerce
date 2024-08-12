import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const User = DBconfig.define("usuarios", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
})
