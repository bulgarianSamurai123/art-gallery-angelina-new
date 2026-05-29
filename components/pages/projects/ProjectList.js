import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlayer from "../../ui/VideoPlayer";
import ProjectModal from "../../layout/ProjectModal";

const ProjectList = ({ projects, currentPage }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
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
            <button
              className="flex flex-col w-full text-left"
              onClick={() => setSelectedProject(project)}
            >
              <VideoPlayer project={project}  />
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectList;
