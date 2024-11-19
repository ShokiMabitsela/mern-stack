import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route";
import userRoutes from "./routes/userRoutes";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

// Configure environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();

// Define the port
const PORT: number = parseInt(process.env.PORT || "5000", 10);

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Serve frontend files in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve(); // Ensure __dirname is defined for TypeScript compatibility
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  // Basic route for non-production environments
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running....");
  });
}

// Middleware for error handling
app.use(notFound);
app.use(errorHandler);

// Connect to database and start the server
const startServer = async (): Promise<void> => {
  try {
    await connectDB(); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
3