import React from "react";
import { motion } from "framer-motion";
import Checkbox from "./Checkbox";

const DropDown = ({ filters }) => {
  return (
    <motion.div
      className="flex flex-col absolute top-44 right-8 lg:top-44 lg:right-20 xl:top-60 xl:right-32 bg-white px-9 py-4 shadow-2xl rounded-xl z-50"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <ul className="flex flex-col gap-3">
        {filters.map((filter) => (
          <Checkbox
            key={filter.name}
            label={filter.name}
            value={filter.check}
            onChange={filter.toggleCheck}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default DropDown;
