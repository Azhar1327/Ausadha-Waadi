const express = require("express");
const ocrAPI = require("../controllers/OCRcontroller");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/ProductController");
const {
  SubmitMedicineRequest,
  getAllMedicineRequest,
  updateRequestedMedicineStatus,
} = require("../controllers/ReqMedController");

//For Requested Medicines Routes

const isAuthenticated = require("../middleware/auth");
const authrole = require("../middleware/authRole");

router.route("/createProduct").post(createProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/request/medicine/submit").post(SubmitMedicineRequest);
router.route("/request/medicine/getAll").get(getAllMedicineRequest);
router.route("/request/medicine/Update").put(updateRequestedMedicineStatus);
router.route("/ocr").get(ocrAPI);

module.exports = router;
