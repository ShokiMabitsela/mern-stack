import React from "react"; 
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Product } from "../store/product";
import { IoMoon } from "react-icons/io5";

// Define the Product type
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProduct = async (pid: string) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid: string, updatedProduct: Product) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsOpen(false);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-xl bg-white dark:bg-gray-800">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-md font-bold mb-2">{product.name}</h3>

        <p className="font-bold text-xl text-gray-600 dark:text-gray-200 mb-4">
          ${product.price}
        </p>

        <div className="flex space-x-2">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 bg-blue-500 text-white rounded-full"
          >
            <EditIcon fontSize={20} />
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="p-2 bg-red-500 text-white rounded-full"
          >
            <DeleteIcon fontSize={20} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <input
              type="text"
              placeholder="Product Name"
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="string"
              placeholder="Price"
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={updatedProduct.image}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                className="p-2 bg-blue-500 text-white rounded-full"
              >
                Update
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-500 text-white rounded-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
