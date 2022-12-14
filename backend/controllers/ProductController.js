const Product = require("../models/productModel");

//create product API
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      message: "Product created sucessfylly",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server occured",
      error: error.message,
    });
  }
};

//Get All Product API

const Apifeatures = require("../utils/apifeatures");

exports.getAllProducts = async (req, res) => {
  const resultPerPage = 1;
  try {
    const apiFeatures = new Apifeatures(Product.find(), req.query);
    apiFeatures.search();
    apiFeatures.filter();
    apiFeatures.pagination(resultPerPage);
    const product = await apiFeatures.query;

    res.status(200).json({
      message: "Product Fetch Sucesfully",
      total_product_count: product.length,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server error occured",
      error: error.message,
    });
  }
};
