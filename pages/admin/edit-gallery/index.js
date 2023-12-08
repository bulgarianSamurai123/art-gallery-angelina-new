import React from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import { getGallery } from "../../../helpers/api-util";
import AddButton from "../../../components/ui/Buttons/AddButton";
import RemoveButton from "../../../components/ui/Buttons/RemoveButton";
import EditButton from "../../../components/ui/Buttons/EditButton";
import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";

const EditGallery = ({ galleryImages }) => {
  const router = useRouter();

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <Section>
      <div className="flex flex-row justify-between pb-10">
        <BackButton link="/admin" />
        <AddButton navigate={navigateHandler} buttonType="gallery" />
      </div>

      <div className="w-full flex flex-row justify-center">
        <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-5">
          <thead>
            <tr>
              <th>Снимка</th>
              <th>Други опций</th>
            </tr>
          </thead>
          <tbody>
            {galleryImages.map((gallery) => (
              <tr key={gallery.image}>
                <td className="w-52">
                  <img src={gallery.image} alt={gallery.image} />
                </td>
                <td className="flex flex-col gap-2">
                  <RemoveButton buttonType="gallery" />
                  <EditButton buttonType="gallery" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export async function getServerSideProps(context) {
  const galleryImages = await getGallery();
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
    props: {
      galleryImages: galleryImages,
      session,
    },
  };
}

export default EditGallery;
