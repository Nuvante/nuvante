import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  cancelledProductPrice: {
    type: String,
    required: true,
  },
  latest: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  materials: {
    type: String,
    required: true,
  },
});

// 👇 Explicitly define the collection name "products"
let productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema, "products");

export default productModel;
