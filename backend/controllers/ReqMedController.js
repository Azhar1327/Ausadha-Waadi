const ReqMed = require("../models/ReqMed");

exports.SubmitMedicineRequest = async (req, res) => {
  try {
    const medicineRequested = await ReqMed.create(req.body);
    res.status(200).json({
      Message: "Medicine Requested Sucessfully",
      data: medicineRequested,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Some Internal server error occured",
      error: error.message,
    });
  }
};

exports.getAllMedicineRequest = async (req, res) => {
  try {
    const medicineRequested = await ReqMed.find();
    res.status(200).json({
      Message: "Requested Medicine fetched Sucessfully",
      data: medicineRequested,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Some Internal server error occured",
      error: error.message,
    });
  }
};

exports.updateRequestedMedicineStatus = async (req, res) => {
  try {
    const medicineUpdate = await ReqMed.findById(req.body.id);
    medicineUpdate.availability = req.body.status;
    await medicineUpdate.save();
    res.status(200).json({
      Message: "Request Status Updated Sucessfully",
      data: medicineUpdate,
    });
  } catch (error) {
    res.status(500).json({
      Message: "Some Internal server error occured",
      error: error.message,
    });
  }
};
