import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { User } from "./User.js";
import { Product } from "./Product.js";

export const Requests = DBconfig.define("pedido", {

  
})

User.belongsToMany(Product, { through: Requests });
Product.belongsToMany(User, { through: Requests });