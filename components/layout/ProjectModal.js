import React, { useEffect } from "react";
import { motion } from "framer-motion";
import VideoPlayer from "../ui/VideoPlayer";
import { useLocalize } from "../../helpers/localize";

const ProjectModal = ({ project, onClose }) => {
  const l = useLocalize();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // click backdrop to close
    >
      <motion.div
        className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-y-auto w-[75vw] max-h-[90vh] shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          <VideoPlayer project={project} />

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">{l(project, "title")}</h2>
            <p className="text-sm opacity-70">{project.client}</p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {l(project, "description")}
            </p>
          </div>

          {/* Add any other project fields here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
