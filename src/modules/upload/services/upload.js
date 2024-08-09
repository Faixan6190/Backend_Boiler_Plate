import { v2 as cloudinary } from "cloudinary";
import { ENV } from "../../../constants/index.js";
import fsExtra from "fs-extra";

cloudinary.config({
  cloud_name: ENV.CLOUD_NAME,
  api_key: ENV.API_KEY,
  api_secret: ENV.API_SECRET,
});

const uploadFile = async (data) => {
  return new Promise((resolve, reject) => {
    fsExtra.readdir("/src/modules/upload/files", (err, files) => {
      console.log("err, files", err, files);
    });
    resolve();
    // cloudinary.uploader.upload(
    //   "",
    //   {
    //     public_id: "shoes",
    //   },
    //   function (error, result) {
    //     console.log(result);
    //   }
    // );
  });
};

export default uploadFile;
