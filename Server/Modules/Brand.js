import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

import { Product } from "./Product.js";

export const Brand = DBconfig.define("marca", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
})

Brand.hasMany(Product, { foreignKey: 'brandId', as: 'products' });
Product.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' });
