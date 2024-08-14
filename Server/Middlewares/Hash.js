import bcrypt from "bcrypt";

export const doHash =  (password) => {
  const saltRounds = 10;
  try {
    const hash =  bcrypt.hashSync(password, saltRounds);
    console.log(`\n Senha hasheada com sucesoo!!\n`);
    return hash;
  } catch (error) {
    console.error(`Erro ao dar hash`, error);
  }
};  
