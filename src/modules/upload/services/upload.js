import { v2 as cloudinary } from "cloudinary";
import { ENV } from "../../../constants/index.js";
import fsExtra from "fs-extra";

cloudinary.config({
  cloud_name: ENV.CLOUD_NAME,
  api_key: ENV.API_KEY,
  api_secret: ENV.API_SECRET,
});

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `src/modules/upload/files/${file.filename}`,
      { public_id: "store-images" },
      function (error, result) {
        console.log(result);
      }
    );
    resolve();
  });
};

export default uploadFile;
