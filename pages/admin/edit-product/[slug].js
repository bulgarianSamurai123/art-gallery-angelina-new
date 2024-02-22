import React, { useState, useEffect, Fragment } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { storage } from "../../../helpers/firebase";
import { notificationHandler } from "../../../helpers/notification-util";
import { getProductById, getProducts } from "../../../helpers/api-util";
import { responseHandler } from "../../../helpers/edit-product";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Notification from "../../../components/ui/Notification";
import useImage from "../../../hooks/use-image";
import { useRouter } from "next/router";
import Head from "next/head";

const EditProductData = ({ selectedProduct }) => {
  const { t } = useTranslation();
  const { image, setImage, nameRef } = useImage(
    selectedProduct ? selectedProduct.coverImage : null
  );

  const [images, setImages] = useState(
    selectedProduct ? selectedProduct.coverImage : null
  );

  const [name, setName] = useState(
    selectedProduct ? selectedProduct.name : null
  );
  const [id, setId] = useState(selectedProduct ? selectedProduct.id : null);
  const [price, setPrice] = useState(
    selectedProduct ? selectedProduct.price : null
  );
  const [description, setDescription] = useState(
    selectedProduct ? selectedProduct.description : null
  );
  const [isFeatured, setIsFeatured] = useState(
    selectedProduct ? selectedProduct.isFeatured : null
  );

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/log-in";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function submitHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    const editDate = selectedProduct.date;
    const urls = new Array();

    for (const image of images) {
      const imageRef = ref(
        storage,
        `${process.env.firebase_storage}/${id}/${image.name}`
      );
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
            getDownloadURL(uploadImage.snapshot.ref).then(
              async (downloadURL) => {
                urls.push(downloadURL);

                if (urls.length >= 3) {
                  responseHandler(
                    id,
                    name,
                    price,
                    description,
                    urls,
                    isFeatured,
                    editDate
                  );
                  setRequestStatus("success");
                  router.push("/admin/edit-product");
                }
              }
            );
          }
        );
      } catch (error) {
        setRequestStatus("error");
        setRequestError(error);
      }
    }
  }

  let notification;

  notification = notificationHandler(
    requestStatus,
    notification,
    requestError,
    "update"
  );

  if (isLoading) {
    return <p className="flex flex-row justify-center my-60">Loading...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Коригирай продукт</title>
      </Head>
      <Section>
        <div className="flex flex-row w-full items-start">
          <BackButton t={t} link="/admin/edit-product/" />
        </div>

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("admin.edit-products-page.title")}
        </h1>

        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <InputContainer>
            <label htmlFor="name">
              {t("admin.edit-products-page.table.product-name")}
            </label>
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
              {t("admin.edit-products-page.table.product-id")}
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
            <label htmlFor="price">
              {t("admin.edit-products-page.table.product-price")}
            </label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              id="price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="cover-img">
              {t("admin.edit-products-page.table.product-images")}
            </label>
            <input
              multiple
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="file"
              id="cover-img"
              name="cover-img"
              onChange={(event) => {
                setImages(event.target.files);
              }}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="description">
              {t("admin.edit-products-page.table.product-description")}
            </label>
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
            <Button type="submit">
              {t("admin.edit-products-page.table.product-submit")}
            </Button>
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

export async function getStaticProps({ params, locale }) {
  const productID = params.slug;
  const product = await getProductById(productID);

  return {
    props: {
      selectedProduct: product,
      ...(await serverSideTranslations(locale)),
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
