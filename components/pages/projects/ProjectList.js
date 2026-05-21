import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
import VideoPlayer from '../../ui/VideoPlayer';

const ProjectList = ({ projects, currentPage }) => {
  return (
    <motion.ul
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-top justify-center overflow-hidden"
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.li
          key={project.id}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <Link
            className="flex flex-col"
            href={{
              pathname: `/projects/${project.id}`,
              query: { page: currentPage },
            }}
          >
            <VideoPlayer project={project} />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default ProjectList
