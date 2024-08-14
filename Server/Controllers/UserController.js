import { User } from "../Models/User.js";
import { doHash } from "../Middlewares/Hash.js";

//GET

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST - RERGISTER

export const registerUser = async (req, res) => {
  try {
    const { nome, email, senha, usuario, cpf } = req.body;
    
    const hashedPassword = await doHash(senha);
    console.log(req.body);
    const users = await User.create({nome, email, senha: hashedPassword, usuario, cpf});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST - LOGIN

export const loginUser = async (req, res) => {
  try {
    const { email, senha} = req.body;

  } catch (error) {
    console.log(error);
  };
};


