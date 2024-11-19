import express, { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller";

const router: Router = express.Router();

// Route to get all products
router.get("/", getProducts);

// Route to create a new product
router.post("/", createProduct);

// Route to update an existing product by ID
router.put("/:id", updateProduct);

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
