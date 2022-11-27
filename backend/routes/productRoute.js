const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/ProductController");

const isAuthenticated = require("../middleware/auth");
const authrole = require("../middleware/authRole");

router.route("/createProduct").post(createProduct);
router.route("/getAllProducts").get(getAllProducts)

module.exports = router;
