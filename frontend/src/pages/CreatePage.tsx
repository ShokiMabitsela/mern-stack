import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

// Define the type for the newProduct state
interface Product {
  name: string;
  price: string;
  image: string;
}

const CreatePage: React.FC = () => {
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  // Access the createProducts function from Zustand
  const createProduct = useProductStore((state) => state.createProduct);

  const handleAddProduct = async () => {
    // Generate a unique ID for the new product
    const id = uuidv4();

    // Call the createProducts function with both id and newProduct
    const { success, message } = await createProduct(id, newProduct);

    // Display a toast notification based on the success or failure of the product creation
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }

    // Reset the form after submission
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Create New Product
        </Heading>

        <Box
          w="full"
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
