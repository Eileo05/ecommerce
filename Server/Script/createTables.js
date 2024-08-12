import { DBconfig } from "../Config/db.js";
import {User} from "../Modules/User.js";

export const createTables = async() => {
    try {
        await DBconfig.authenticate();  
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await DBconfig.sync(); 
        console.log('\n3. Tabelas sincronizadas/criadas com sucesso.\n');

    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
}

