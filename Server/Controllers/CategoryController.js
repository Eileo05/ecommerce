// controllers/CategoryController.js
import { Category } from "../Models/Category.js";
import { Product } from "../Models/Product.js";
import { ProductCategory } from "../Models/Product_Category.js";

//POST
export const createCategory = async (req, res) => {
  const { nome, usa_no_menu } = req.body;

  try {
    const newCategory = await Category.create({
      nome: nome,
      usa_no_menu: usa_no_menu,
    });

    res.status(201).json(newCategory, "Categoria criada com sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT BY ID
export const updateCategory = async (req, res) =>{
  const { id } = req.params;
  const { nome, usa_no_menu } = req.body

  try {
    const category = await Category.findByPk(id)

    if (!category){
      res.status(404).json({ message: "Categoia não encontrada" })
      return;
    }

    category.nome = nome;
    category.usa_no_menu = usa_no_menu

    await category.save();

    res.status(200).json(category, "Categoria atualizada com sucesso")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//DELETE BY ID
export const deleteCategory = async (req, res) =>{
  const { id } = req.params;

  try {
    const category = await Category.findByPk(id);

    if (!category) {
      res.status(404).json({ message: "Categoria não encontrada" })
      return;
    }

    await category.destroy()

    res.status(204).json({ message: "Categoria deletada com sucesso" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//GET ALL
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],  
    })

    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//GET ID
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar a categoria', error });
    }
};

//POST
export const addProductToCategory = async (req, res) => {
  const { categoryId, productId } = req.body

  try {
    const category = await Category.findByPk(categoryId)
    const product = await Product.findByPk(productId)

    if (!category || !product) {
      res.status(404).json({ message: "Categoria ou produto não encontrado" })
      return
    }

    await category.addProduct(product);

    res.status(201).json({ message: "Product adiconado" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};