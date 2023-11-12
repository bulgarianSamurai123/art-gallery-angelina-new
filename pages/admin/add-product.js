import React, { useRef, useState } from "react";
import { getSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../../helpers/firebase";
import InputContainer from "../../components/ui/form/InputContainer";
import Button from "../../components/ui/Button";
import Section from "../../components/layout/Section";

const AddProductPage = () => {
  const nameRef = useRef();

  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);

  async function responseHandler(id, name, price, description, imageUrl) {
    const response = await fetch(
      "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "POST",
        body: JSON.stringify({
          id,
          name,
          price,
          description,
          coverImage: imageUrl,
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

    const name = nameRef.current.value;

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

  return (
    <Section>
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Add Product
      </h1>

      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="name">Enter Product Name: </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="name"
            ref={nameRef}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="product-id">
            Enter Product Id (how it will be displayed in the search bar):{" "}
          </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="product-id"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="price">Enter Product Price</label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="number"
            id="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </InputContainer>
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
        <InputContainer>
          <label htmlFor="description">Enter Description: </label>
          <textarea
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            rows={10}
            placeholder="Enter description..."
            id="description"
            onChange={(event) => {
              setDescription(event.target.value);
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default AddProductPage;
