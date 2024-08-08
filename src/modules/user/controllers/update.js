import updateData from "../services/update.js";

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    await updateData(id, req.body);
    res.status(200).send({ status: 200, message: "User updated successfully" });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
};

export default updateController;
