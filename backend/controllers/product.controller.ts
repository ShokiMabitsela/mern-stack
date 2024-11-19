import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/product.model";

// Get all products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", (error as Error).message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body; // User-provided product data

  if (!product.name || !product.price || !product.image) {
    res.status(400).json({ success: false, message: "Please provide all fields" });
    return;
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product:", (error as Error).message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product Id" });
    return;
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    if (!updatedProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in updating product:", (error as Error).message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product Id" });
    return;
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error in deleting product:", (error as Error).message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
