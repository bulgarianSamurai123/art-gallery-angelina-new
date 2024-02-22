import React, { useState, useEffect, Fragment } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getSession } from "next-auth/client";
import { useTranslation } from "next-i18next";

import { storage } from "../../../helpers/firebase";
import { notificationHandler } from "../../../helpers/notification-util";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Notification from "../../../components/ui/Notification";
import useImage from "../../../hooks/use-image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AddProductPage = () => {
  const { t } = useTranslation();
  const { imageRef: nameRef } = useImage();

  const [images, setImages] = useState([]);

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
    imageUrls,
    isFeatured,
    date
  ) {
    const response = await fetch(
      `${process.env.firebase_products_url}/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          id,
          name,
          price,
          description,
          coverImage: imageUrls,
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
    if (event.key === "Enter") {
      return;
    }

    event.preventDefault();

    setRequestStatus("pending");

    const name = nameRef.current.value;
    const insertedDate = new Date();
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
                    insertedDate
                  );
                  setRequestStatus("success");
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
    "add"
  );

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Добавяне на продукти</title>
      </Head>
      <Section>
        <div className="flex flex-row w-full items-start">
          <BackButton t={t} link="/admin/edit-product/" />
        </div>

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("admin.add-product.title")}
        </h1>

        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <InputContainer>
            <label htmlFor="name">
              {t("admin.add-product.table.product-name")}
            </label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              id="name"
              ref={nameRef}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="product-id">
              {t("admin.add-product.table.product-id")}
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
            <label htmlFor="price">{t("admin.add-product.table.product-price")}</label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              id="price"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="cover-img">{t("admin.add-product.table.product-images")}</label>
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
            <label htmlFor="description">{t("admin.add-product.table.product-description")}</label>
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
            <Button type="submit">{t("admin.add-product.table.product-submit")}</Button>
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

export async function getServerSideProps({ req, locale }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/log-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default AddProductPage;
