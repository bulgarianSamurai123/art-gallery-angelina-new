export function notificationHandler(
  requestStatus,
  notification,
  error,
  operation
) {
  if (operation === "contact") {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Sending message...",
        message: "Your message is on its way!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Delivered!",
        message: "Your message was delivered successfuly!",
      };
    }
  }
  if (operation === "add") {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Adding product...",
        message: "Product is being added!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Product Added!",
        message: "Product was added successfuly!",
      };
    }
  }
  if (operation === "remove") {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Removing product...",
        message: "Product is being removed!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Product Removed!",
        message: "Product was removed successfuly!",
      };
    }
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error occured!",
      message: error,
    };
  }

  return notification;
}
