const cloudinary = require("cloudinary");

const ocrAPI = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.pdf, {
      folder: "resume",
      width: 150,
      crop: "scale",
    });
    res.status(200).json({
      sucess: "true",
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server error occured",
      error: error.message,
    });
  }
};

module.exports = ocrAPI;
