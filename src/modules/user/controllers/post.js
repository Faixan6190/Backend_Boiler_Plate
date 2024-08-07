import postData from "../services/post.js";

const post = async (req, res) => {
  try {
    const user = await postData();
    res.status(200).send({ status: 200, data: user });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
};
