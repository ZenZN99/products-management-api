import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taxes: {
      type: Number,
      default: 0,
    },
    ads: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: function() {
        return this.price + this.taxes + this.ads - this.discount;
      },
    },
    category: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 1, 
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true } 
);
const Product = mongoose.model("Product", crudSchema);
export default Product;
