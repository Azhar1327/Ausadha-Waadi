const express = require("express");
const { createEmergencyRequest,getAllEmergencyRequest } = require("../controllers/EmgController");
const ocrAPI = require("../controllers/OCRcontroller");
const otp = require("../controllers/Otp");
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

router.route("/emergency/request").post(createEmergencyRequest);
router.route("/emergency/getAll").get(getAllEmergencyRequest);

router.route("/otp").post(otp);

module.exports = router;
