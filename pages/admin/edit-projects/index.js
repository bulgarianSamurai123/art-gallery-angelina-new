import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../helpers/firebase";
import { isAdmin } from "../../../helpers/admin-check";

import { getProjects } from "../../../helpers/api-util";

import Section from "../../../components/layout/Section";
import BackButton from "../../../components/ui/Buttons/BackButton";
import AddButton from "../../../components/ui/Buttons/AddButton";
import RemoveButton from "../../../components/ui/Buttons/RemoveButton";
import EditButton from "../../../components/ui/Buttons/EditButton";

const EditAdvertisements = ({ projects }) => {
  const router = useRouter();

  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  const navigateHandler = (url) => {
    router.push(url);
  };

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

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Таблица с Реклами</title>
      </Head>
      <Section>
        <div className="flex flex-row justify-between pb-10">
          <BackButton link="/admin" />
          <AddButton navigate={navigateHandler} buttonType="projects" />
        </div>
        <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-5">
          <thead>
            <tr>
              <th>Видео</th>
              <th>Име</th>
              <th>Клиент</th>
              <th>Описание</th>
              <th>Специален продукт</th>
              <th>Други опций</th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project) => (
              <tr key={project.id}>
                <td className="w-28">
                  <video
                    src={project.videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full rounded-xl"
                  />
                </td>
                <td>{project.title}</td>
                <td>
                  {project.client ? project.client : "Без клиент"}
                </td>
                <td>{project.description}</td>
                <td className="text-sm">
                  {project.isFeatured ? "Специален" : "Не е специален"}
                </td>
                <td className="flex flex-row gap-2">
                  <RemoveButton
                    buttonType="project"
                    handlerDeleteItem={() => {
                      handleDeleteItem(project.id);
                    }}
                    productID={project.id}
                  />
                  <EditButton
                    buttonType="projects"
                    link={`/admin/edit-projects/${project.id}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const projects = await getProjects();

  return {
    props: {
      projects: projects,
    },
  };
}

export default EditAdvertisements;
