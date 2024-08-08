import { INTERNAL_SERVER_ERROR_MESSAGE } from "../../../constants/index.js";
import uploadFile from "../services/upload.js";

const uploadController = async (req, res) => {
  try {
    console.log("req", req.body);
  } catch (error) {
    res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
};

export default uploadController;
