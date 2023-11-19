import React, { useRef, useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { set } from "firebase/database";

import { storage } from "../../../helpers/firebase";
import { notificationHandler } from "../../../helpers/notification-util";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Notification from "../../../components/ui/Notification";
import useImage from "../../../hooks/use-image";

const AddProductPage = () => {
  const { image, setImage, nameRef } = useImage();

  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [isFeatured, setIsFeatured] = useState(false);

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function responseHandler(
    id,
    name,
    price,
    description,
    imageUrl,
    isFeatured
  ) {
    const response = await fetch(
      `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          id,
          name,
          price,
          description,
          coverImage: imageUrl,
          isFeatured,
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

    setRequestStatus("pending");

    const name = nameRef.current.value;

    const imageRef = ref(storage, `images/${id}/${image.name}`);
    const uploadImage = uploadBytesResumable(imageRef, image);

    try {
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
            responseHandler(
              id,
              name,
              price,
              description,
              downloadURL,
              isFeatured
            );
            setRequestStatus("success");
          });
        }
      );
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error);
    }
  }

  let notification;

  notification = notificationHandler(
    requestStatus,
    notification,
    requestError,
    'add'
  );

  return (
    <Section>
      <div className="flex flex-row w-full items-start">
        <BackButton link="/admin/edit-product/" />
      </div>

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
        <InputContainer className="flex flex-row gap-2 items-center">
          <input
            className="accent-gray-490 border-gray-850 w-4 h-4"
            type="checkbox"
            id="featured"
            checked={isFeatured}
            onChange={() => {
              setIsFeatured(!isFeatured);
            }}
          />
          <label htmlFor="featured">Is Featured</label>
        </InputContainer>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Section>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/log-in",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default AddProductPage;
