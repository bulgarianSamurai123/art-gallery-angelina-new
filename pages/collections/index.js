import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslations } from "next-intl";

import { getProjects } from "../../helpers/api-util";
import { getProductsQuery, getProjectsQuery } from "../../helpers/database-queries";

import Section from "../../components/layout/Section";
import ProjectList from "../../components/pages/projects/ProjectList";
import Pagination from "../../components/ui/Pagination";

const Advertisements = ({ projects: firstProject }) => {
  const router = useRouter();
  const t = useTranslations("Collections");
  const tMeta = useTranslations("Meta");
    const { page } = router.query;

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [projectsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

useEffect(() => {
    getProjectsQuery(
      currentPage,
      projectsPerPage,
      setProjects,
      setTotalPages,
      setHasNextPage,
    );
  }, [
    currentPage,
    projectsPerPage,
  ]);

  return (
    <Fragment>
      <Head>
        <title>{tMeta("collectionsTitle")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta
          name="title"
          property="og:title"
          content={tMeta("collectionsTitle")}
        />
        <meta
          name="description"
          property="og:description"
          content={tMeta("collectionsDescription")}
        />
        <meta
          name="url"
          property="og:url"
          content="http://angelinartgallery.com/advertisements"
        />
        {firstProject ? (
          <meta
            name="image"
            property="og:image"
            content={firstProject.videoUrl}
          />
        ) : null}
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("title")}
        </h1>

        {projects.length < 1 && <p>{t("loading")}</p>}
        {projects.length >= 1 && (
          <ProjectList projects={projects} currentPage={currentPage} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={(page) => {
            setCurrentPage(page);
            router.push(`/projects?page=${page}`);
          }}
          hasNextPage={hasNextPage}
        />
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default Advertisements;
