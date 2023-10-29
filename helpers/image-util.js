import multer from "multer";

export default async function uploadImage(imageName) {
  const storage = multer.diskStorage({
    destination: "public/images", // The folder where images will be saved
    filename: (req, file, callback) => {
      // Use the original filename provided by the admin
      callback(null, imageName);
    },
  });
  const upload = multer({ storage }).single("image");

  return new Promise((resolve, reject) => {
    upload(null, null, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(imageName);
      }
    });
  });
}
