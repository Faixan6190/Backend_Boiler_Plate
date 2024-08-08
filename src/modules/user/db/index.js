import User from "../models/User.js";

const getAll = async () => await User.find();

const addData = async (data) => new User(data).save().then((user) => user.toObject());

const deleteById = async (id) => await User.findByIdAndDelete(id);

export { getAll, addData, deleteById };
