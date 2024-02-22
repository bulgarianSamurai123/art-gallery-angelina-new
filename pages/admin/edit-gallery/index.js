import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { deleteObject, ref } from "firebase/storage";
import { useTranslation } from "next-i18next";

import { storage } from "../../../helpers/firebase";
import { getGallery } from "../../../helpers/api-util";
import { notificationHandler } from "../../../helpers/notification-util";
import Notification from "../../../components/ui/Notification";
import AddButton from "../../../components/ui/Buttons/AddButton";
import RemoveButton from "../../../components/ui/Buttons/RemoveButton";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const EditGallery = ({ galleryImages }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [galleryList, setGalleryList] = useState(galleryImages);

  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  const navigateHandler = (url) => {
    router.push(url);
  };

  useEffect(() => {
    setGalleryList(galleryImages);
  }, [galleryImages]);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function handleDeleteItem(itemId) {
    setRequestStatus("pending");

    try {
      const response = await fetch(
        `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery/${itemId}.json`
      );

      if (!response.ok) {
        setRequestStatus("error");
        setRequestError(error);
      }

      const data = await response.json();
      const imageUrl = data.image;

      const deleteResponse = await fetch(
        `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery/${itemId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        setRequestStatus("error");
        setRequestError(error);
      }

      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);

      setProductList((prevGalleryImage) =>
        prevGalleryImage.filter((gallery) => gallery.name !== itemId)
      );

      setRequestStatus("success");
      console.log("User deleted successfully");
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
    "remove"
  );

  return (
    <Section>
      <div className="flex flex-row justify-between pb-10">
        <BackButton t={t} link="/admin" />
        <AddButton t={t} navigate={navigateHandler} buttonType="gallery" />
      </div>

      <div className="w-full flex flex-row justify-center">
        <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-5">
          <thead>
            <tr>
              <th>{t("admin.edit-gallery.table.col-1")}</th>
              <th>{t("admin.edit-gallery.table.col-2.title")}</th>
            </tr>
          </thead>
          <tbody>
            {galleryImages.map((gallery) => (
              <tr key={gallery.image}>
                <td className="w-52">
                  <img src={gallery.image} alt={gallery.image} />
                </td>
                <td className="flex flex-col gap-2">
                  <RemoveButton
                    t={t}
                    buttonType="gallery"
                    handlerDeleteItem={() => handleDeleteItem(gallery.name)}
                    productID={gallery.name}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
      </div>
    </Section>
  );
};

export async function getServerSideProps({ req, locale }) {
  const galleryImages = await getGallery();
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
      galleryImages: galleryImages,
      session,
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default EditGallery;
