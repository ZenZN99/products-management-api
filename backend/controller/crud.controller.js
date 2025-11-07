import Product from "../models/Crud.js";

export async function createProduct(req, res) {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    let {
      title,
      price,
      taxes = 0,
      ads = 0,
      discount = 0,
      category,
      count = 1,
    } = req.body;

    if (!title || !price || !category) {
      return res
        .status(400)
        .json({ error: "Title, Price and Category are required" });
    }

    price = +price;
    taxes = +taxes;
    ads = +ads;
    discount = +discount;
    count = +count;

    if (price < 0) price = 0;
    if (discount < 0) discount = 0;

    let discountedPrice = price - discount;
    if (discountedPrice < 0) discountedPrice = 0;

    const total = discountedPrice + taxes + ads;

    const newProduct = await Product.create({
      title,
      price: discountedPrice,
      taxes,
      ads,
      discount,
      total,
      category,
      count,
      userId: req.user._id,
    });

    return res.status(201).json({ success: "Product created", newProduct });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the product" });
  }
}

export async function readProduct(req, res) {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const products = await Product.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while reading products" });
  }
}

export async function updateProduct(req, res) {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Product ID is required" });

    let {
      title,
      price,
      taxes = 0,
      ads = 0,
      discount = 0,
      category,
      count = 1,
    } = req.body;

    if (!title || !price || !category) {
      return res
        .status(400)
        .json({ error: "Title, Price and Category are required" });
    }

    price = +price;
    taxes = +taxes;
    ads = +ads;
    discount = +discount;
    count = +count;

    if (price < 0) price = 0;
    if (discount < 0) discount = 0;

    let discountedPrice = price - discount;
    if (discountedPrice < 0) discountedPrice = 0;

    const total = discountedPrice + taxes + ads;

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      {
        title,
        price: discountedPrice,
        taxes,
        ads,
        discount,
        total,
        category,
        count,
      },
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found!" });

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the product" });
  }
}

export async function deleteProduct(req, res) {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Product ID is required" });

    const deletedProduct = await Product.findOneAndDelete({
      _id: id,
      userId: req.user._id,
    });

    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found!" });

    return res.status(200).json({ success: "Product deleted", deletedProduct });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the product" });
  }
}
