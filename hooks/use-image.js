import React, { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../helpers/firebase";

function useImage({ responseHandler, id, name, price, description, image }) {
  const imageRef = ref(storage, `images/${id}/${image.name}`);
  const uploadImage = uploadBytesResumable(imageRef, image);

  uploadImage.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadImage.snapshot.ref).then(async (downloadURL) => {
        responseHandler(id, name, price, description, downloadURL);
      });
    }
  );
}

export default useImage;
