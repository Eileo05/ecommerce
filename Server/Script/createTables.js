import { DBconfig } from "../Config/db.js";
//Tabelas
import { Address } from '../Modules/Address.js';
import { Brand } from '../Modules/Brand.js';
import { Category } from '../Modules/Category.js';
import { Image } from '../Modules/Image.js';
import { Product } from '../Modules/Product.js';
import { ProductCategory } from '../Modules/Product_Category.js';
import { ProductImage } from '../Modules/Product_Image.js';
import { Requests } from '../Modules/Requests.js';
import { Sales } from '../Modules/Sales.js';
import { Telephone } from '../Modules/Telephone.js';
import { User } from '../Modules/User.js';
import { UserAddress } from '../Modules/User_Address.js';
import { UserTelephone } from '../Modules/User_Telephone.js';




export const createTables = async () => {
    try {
        await DBconfig.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await DBconfig.sync();
        console.log('\n3. Tabelas sincronizadas/criadas com sucesso.\n');

    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    };
};

