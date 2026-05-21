import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../helpers/firebase";
import { isAdmin } from "../../../helpers/admin-check";

import { storage } from "../../../helpers/firebase";
import { notificationHandler } from "../../../helpers/notification-util";
import useImage from "../../../hooks/use-image";
import Section from "../../../components/layout/Section";
import InputContainer from "../../../components/ui/form/InputContainer";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Button from "../../../components/ui/Button";
import Notification from "../../../components/ui/Notification";

const AddGallery = () => {
  const { image, setImage, imageRef: nameRef } = useImage();

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

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/log-in");
        return;
      }

      const admin = await isAdmin(user.uid);
      if (!admin) {
        router.replace("/");
        return;
      }
    });
  }, []);

  async function responseHandler(name, imageUrl, date) {
    const response = await fetch(
      `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery/${name}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          name,
          image: imageUrl,
          date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      },
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

    const imageRef = ref(storage, `gallery/${image.name}`);
    const uploadImage = uploadBytesResumable(imageRef, image);

    const insertedDate = new Date();

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
            responseHandler(name, downloadURL, insertedDate);
            setRequestStatus("success");
          });
        },
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
    "add",
  );

  return (
    <Section>
      <div className="flex flex-row w-full items-start">
        <BackButton link="/admin/edit-gallery/" />
      </div>

      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Add Gallery Image
      </h1>

      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <InputContainer>
          <label htmlFor="name">Въведи име на продукт: </label>
          <input
            className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
            type="text"
            id="name"
            ref={nameRef}
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

export default AddGallery;
