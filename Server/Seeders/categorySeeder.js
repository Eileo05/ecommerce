import Category from '../Models/Category.js'

const categories = [
    { nome: 'Eletrônicos', slug: 'eletronicos', use_in_menu: true },
    { nome: 'Roupas', slug: 'roupas', use_in_menu: true },
    { nome: 'Calçados', slug: 'calcados', use_in_menu: false }
  ];


  export const seedCategories = async () => {
    try {
      await Category.destroy({ where: {}, truncate: true });
  
      await Category.bulkCreate(categories);
  
      console.log('Categorias inseridas com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir categorias:', error);
    }
  };