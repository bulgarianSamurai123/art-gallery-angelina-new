import React, { useState, useEffect, Fragment } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../../../helpers/firebase";
import { notificationHandler } from "../../../helpers/notification-util";
import { getProductById, getProducts } from "../../../helpers/api-util";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Notification from "../../../components/ui/Notification";
import useImage from "../../../hooks/use-image";
import { useRouter } from "next/router";
import Head from "next/head";

const EditProductData = ({ selectedProduct }) => {
  const { image, setImage, nameRef, clearImage } = useImage(
    selectedProduct.coverImage
  );

  useEffect(() => {
    console.log("Image state:", image);
  }, [image]);

  const [name, setName] = useState(selectedProduct.name);
  const [id, setId] = useState(selectedProduct.id);
  const [price, setPrice] = useState(selectedProduct.price);
  const [description, setDescription] = useState(selectedProduct.description);
  const [isFeatured, setIsFeatured] = useState(selectedProduct.isFeatured);

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  const router = useRouter();

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
    isFeatured,
    date
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
          date,
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

    const editDate = new Date();

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
              isFeatured,
              editDate
            );
            setRequestStatus("success");
            router.push("/admin/edit-product");
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
    "update"
  );

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Коригирай продукт</title>
      </Head>
      <Section>
        <div className="flex flex-row w-full items-start">
          <BackButton link="/admin/edit-product/" />
        </div>

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Edit Product
        </h1>

        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <InputContainer>
            <label htmlFor="name">Enter Product Name: </label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              id="name"
              ref={nameRef}
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={id}
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
              value={price}
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
              value={description}
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
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const productID = context.params.slug;
  const product = await getProductById(productID);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allProducts = await getProducts();

  const paths = allProducts.map((product) => ({
    params: { slug: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default EditProductData;
