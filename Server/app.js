//Scripts
import { createTables } from "./Script/createTables.js";

const main = async () => {
  try {

  await createTables();
    
  }
  catch (error) { 
    console.error(error);
  };
};

main();
//teste 2