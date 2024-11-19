import { create } from "zustand";

export type Product = {
  _id: string;
  name: string;
  image: string;
  price: string;
};

type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
  createProduct: (id: string, newProduct: Omit<Product, "_id">) => Promise<{ success: boolean; message: string }>;
  deleteProduct: (id: string) => Promise<{ success: boolean; message: string }>;
  updateProduct: (id: string, updatedProduct: Product) => Promise<{ success: boolean; message: string }>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  // Create Product method
  createProduct: async (id: string, newProduct: Omit<Product, "_id">) => {
    try {
      const productToCreate = { _id: id, ...newProduct };

      const res = await fetch(`/api/products`, {
        method: "POST",
        body: JSON.stringify(productToCreate),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        return { success: false, message: "Failed to create product" };
      }

      const createdProduct = await res.json();

      // Update the Zustand state
      set((state) => ({
        products: [...state.products, createdProduct],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: "Error occurred while creating product" };
    }
  },

  // Fetch products
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  // Delete Product method
  deleteProduct: async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) {
        return { success: false, message: "Failed to delete product" };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      return { success: false, message: "Error occurred while deleting product" };
    }
  },

  // Update Product method
  updateProduct: async (id: string, updatedProduct: Product) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        return { success: false, message: "Failed to update product" };
      }

      const updatedData = await res.json();

      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? { ...product, ...updatedData } : product
        ),
      }));

      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      return { success: false, message: "Error occurred while updating product" };
    }
  },
}));
