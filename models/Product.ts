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
  productStars: {
    type: Number,
    required: true,
  },
  productReviews: {
    type: Array,
    required: false,
  },
  latest: {
    type: Boolean,
    required: true,
  },
});

//* For a single --forced groping.
// let productModel = mongoose.model("Product", productSchema);

//* For better practice, for continuity, iterative model.
let productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
