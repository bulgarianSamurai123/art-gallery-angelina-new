import ReactDOM from "react-dom";

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
    <div
      className={`flex justify-between items-center text-gray-250 bg-gray-800 shadow-md fixed h-20 bottom-0 w-[100%] left-0 ${statusClasses}`}
    >
      <h2 className="text-2xl m-0">{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")
  );
}

export default Notification;
