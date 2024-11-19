import mongoose, { ConnectOptions } from "mongoose";

// Define a function to connect to the MongoDB database
export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions); // Optional: Type casting for Mongoose options

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("An unknown error occurred while connecting to MongoDB.");
    }
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
