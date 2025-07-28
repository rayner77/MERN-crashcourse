import express from "express";
import Product from "../models/product.js"; // Adjust the path as necessary
import mongoose from "mongoose";
import {
  createdProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

console.log(process.env.MONGO_URI);

router.get("/", getProducts);
router.put("/:id", updateProduct);
router.post("/", createdProduct);
router.delete("/:id", deleteProduct);

export default router;
