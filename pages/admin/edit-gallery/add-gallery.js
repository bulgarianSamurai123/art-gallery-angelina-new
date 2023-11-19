import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../../../helpers/firebase";
import Section from "../../../components/layout/Section";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";

const AddGallery = () => {
  const [image, setImage] = useState(null);

  async function responseHandler(imageUrl) {
    const response = await fetch(
      "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery.json",
      {
        method: "POST",
        body: JSON.stringify({
          image: imageUrl,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const imageRef = ref(storage, `gallery/${image.name}`);
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
          responseHandler(downloadURL);
        });
      }
    );
  }

  return (
    <Section>
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Add Gallery Image
      </h1>

      <form onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="cover-img">Enter Cover Image: </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="file"
            id="cover-img"
            name="cover-img"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </InputContainer>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Section>
  );
};

export default AddGallery;
