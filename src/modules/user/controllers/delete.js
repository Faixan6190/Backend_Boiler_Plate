import deleteData from "../services/delete.js";

const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteData(id);
    res.status(200).send({ status: 200, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal server error" });
  }
};

export default deleteController;
