import postData from "../services/post.js";

const postController = async (req, res) => {
  try {
    const data = await postData(req.body);
    res.status(200).send({ status: 200, data });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
};

export default postController;
