import { Router } from "express";
import { createCategory, updateCategory, deleteCategory, getAllCategories, addProductToCategory, getCategoryById} from "../Controllers/CategoryController.js";

const router = Router();


router.post("/categories", createCategory); 

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", deleteCategory);

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

router.post("/categories/:categoryId/products/:productId", addProductToCategory);

export default router;