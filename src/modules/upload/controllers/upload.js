import { INTERNAL_SERVER_ERROR_MESSAGE, POST_DATA_MESSAGE } from "../../../constants/index.js";
import uploadFile from "../services/upload.js";

const uploadController = async (req, res) => {
  try {
    const file = await uploadFile(req.file);
    res.status(200).send({ status: 200, url: file.url, message: POST_DATA_MESSAGE });
  } catch (error) {
    res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
};

export default uploadController;
