import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../../helpers/firebase";
import { isAdmin } from "../../../helpers/admin-check";
import { notificationHandler } from "../../../helpers/notification-util";
import { storage } from "../../../helpers/firebase";

import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import Notification from "../../../components/ui/Notification";
import InputContainer from "../../../components/ui/form/InputContainer";
import Button from "../../../components/ui/Button";

const AddAdvertisementsPage = () => {
  const router = useRouter();

  const [video, setVideo] = useState(null);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
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

  async function saveProjectToDB(projectData) {
    const response = await fetch(
      `${process.env.firebase_projects_url}/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.json();
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (!video || !id) return;

    setRequestStatus("pending");

    try {
      const videoRef = ref(storage, `projects/${id}/${video.name}`);

      const uploadTask = uploadBytesResumable(videoRef, video);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          setRequestStatus("error");
          setRequestError(error);
        },
        async () => {
          const videoUrl = await getDownloadURL(uploadTask.snapshot.ref);

          await saveProjectToDB({
            id,
            title,
            client,
            description,
            videoUrl,
            isFeatured,
            createdAt: new Date().toISOString(),
          });

          setRequestStatus("success");
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
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Добави Реклама</title>
      </Head>
      <Section>
        <div className="flex flex-row w-full items-start">
          <BackButton link="/admin/edit-projects/" />
        </div>

        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Добави Реклама
        </h1>
        <form encType="multipart/form-data" onSubmit={submitHandler}>
          <InputContainer>
            <label>Project ID</label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              onChange={(e) => setId(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <label>Project Title</label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <label>Client</label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="text"
              onChange={(e) => setClient(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <label>Project Video</label>
            <input
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </InputContainer>

          <InputContainer>
            <label>Description</label>
            <textarea
              rows={8}
              className="border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850"
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputContainer>

          <InputContainer className="flex gap-2 items-center">
            <input
              className="accent-gray-490 border-gray-850 w-4 h-4"
              type="checkbox"
              id="featured"
              checked={isFeatured}
              onChange={() => {
                setIsFeatured(!isFeatured);
              }}
            />
            <label htmlFor="featured">Featured Project</label>
          </InputContainer>

          <Button type="submit">Upload Project</Button>
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

export default AddAdvertisementsPage;
