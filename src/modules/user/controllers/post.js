import { POST_DATA_MESSAGE } from "../constants/index.js";
import postData from "../services/post.js";

const postController = async (req, res) => {
  try {
    const data = await postData(req.body);
    res.status(200).send({ status: 200, data });
  } catch (error) {
    res.status(500).send({ status: 500, message: POST_DATA_MESSAGE });
  }
};

export default postController;
