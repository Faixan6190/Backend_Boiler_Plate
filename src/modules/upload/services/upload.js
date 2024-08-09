import { v2 as cloudinary } from "cloudinary";
import { ENV } from "../../../constants/index.js";
import fsExtra from "fs-extra";
import sharp from "sharp";

cloudinary.config({
  cloud_name: ENV.CLOUD_NAME,
  api_key: ENV.API_KEY,
  api_secret: ENV.API_SECRET,
});

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    const dir = `src/modules/upload/files`;
    const filePath = `src/modules/upload/files/${file.filename}`;
    sharp(filePath)
      .jpeg({ quality: 40 })
      .toFile(`${dir}/resize-${file.filename}`, async (err, info) => {
        cloudinary.uploader.upload(
          `${dir}/resize-${file.filename}`,
          {
            folder: "test-images",
            public_id: file.filename,
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            fsExtra.removeSync(filePath);
            resolve(result);
          }
        );
      });
  });
};

export default uploadFile;
