import mongoose, { Document, Schema } from "mongoose";

// Define an interface representing a Product document in MongoDB
export interface IProduct extends Document {
  name: string;
  price: number;
  image: string;
}

// Define the schema corresponding to the document interface
const productSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // automatically manage createdAt and updatedAt fields
  }
);

// Create and export the Mongoose model based on the schema and interface
const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
