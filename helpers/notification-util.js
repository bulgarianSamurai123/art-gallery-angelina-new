export function notificationHandler(requestStatus, notification, error) {
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
  
    if (requestStatus === "error") {
      notification = {
        status: "error",
        title: "Error occured!",
        message: error,
      };
    }
  
    return notification;
  }