import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "bg-green-100 text-green-500";
  }

  if (status === "error") {
    statusClasses = "bg-red-500";
  }

  return ReactDOM.createPortal(
    <motion.div
      className={`px-10 flex justify-between items-center text-gray-250 bg-gray-800 shadow-md fixed h-20 bottom-20 w-[100%] left-0 ${statusClasses}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [70, 30, 0], opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: .4 }}
    >
      <h2 className="text-2xl m-0">{title}</h2>
      <p>{message}</p>
    </motion.div>,
    document.getElementById("notification")
  );
}

export default Notification;
