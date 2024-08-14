//Scripts
import { createTables } from "./Script/createTables.js";
import { runServer } from "./Script/runServer.js";
import { userSeed } from "./Seeds/UserSeeder.js";

const main = async () => {
  try {
    
    await createTables();
    await runServer();
    await userSeed();
  }
  catch (error) { 
    console.error(error);
  };
};

main();
