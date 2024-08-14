 import { User } from "../Models/User.js";
 
 export const userSeed = async () => {
  try {
    await User.bulkCreate([
      {
        nome: 'Carlos Silva',
        email: 'carlos.silva@example.com',
        senha: 'senhaSegura123',
        usuario: 'carlos.silva',
        cpf: '123.456.789-00'
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        senha: 'senhaSegura456',
        usuario: 'maria.oliveira',
        cpf: '987.654.321-00'
      },
      {
        nome: 'João Santos',
        email: 'joao.santos@example.com',
        senha: 'senhaSegura789',
        usuario: 'joao.santos',
        cpf: '111.222.333-44'
      },
      {
        nome: 'Ana Costa',
        email: 'ana.costa@example.com',
        senha: 'senhaSegura012',
        usuario: 'ana.costa',
        cpf: '555.666.777-88'
      },
      {
        nome: 'Pedro Lima',
        email: 'pedro.lima@example.com',
        senha: 'senhaSegura345',
        usuario: 'pedro.lima',
        cpf: '999.000.111-22'
      },
      {
        nome: 'Laura Pereira',
        email: 'laura.pereira@example.com',
        senha: 'senhaSegura678',
        usuario: 'laura.pereira',
        cpf: '333.444.555-66'
      },
      {
        nome: 'Ricardo Almeida',
        email: 'ricardo.almeida@example.com',
        senha: 'senhaSegura901',
        usuario: 'ricardo.almeida',
        cpf: '777.888.999-00'
      },
      {
        nome: 'Juliana Rodrigues',
        email: 'juliana.rodrigues@example.com',
        senha: 'senhaSegura234',
        usuario: 'juliana.rodrigues',
        cpf: '222.333.444-55'
      },
      {
        nome: 'Felipe Fernandes',
        email: 'felipe.fernandes@example.com',
        senha: 'senhaSegura567',
        usuario: 'felipe.fernandes',
        cpf: '666.777.888-99'
      },
      {
        nome: 'Tatiane Almeida',
        email: 'tatiane.almeida@example.com',
        senha: 'senhaSegura890',
        usuario: 'tatiane.almeida',
        cpf: '444.555.666-77'
      }
    ]);
    console.log('\n Usuário Repovoado com sucesso! \n ');
  } catch (error) {
    
    console.error('Error seeding data:', error);
  }
}