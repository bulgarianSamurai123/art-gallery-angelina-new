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
        title: "Изпращаме съобщението...",
        message: "Съобщението ви пътува!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Пристигна!",
        message: "Съобщението ви пристигна успешно!",
      };
    }
  }
  if (operation === "add") {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Добавяне...",
        message: "Добавя се!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Добавен!",
        message: "Добавен успешно!",
      };
    }
  }
  if (operation === "remove") {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Премахване на продукт...",
        message: "Трием информация за продукта!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Премахване на продукт!",
        message: "Продуктът бе премахнат успешно!",
      };
    }
  }
  if (operation === 'edit') {
    if (requestStatus === "pending") {
      notification = {
        status: "pending",
        title: "Коригиране на продукт...",
        message: "Продуктът се коригира!",
      };
    }

    if (requestStatus === "success") {
      notification = {
        status: "success",
        title: "Продуктът бе коригиран!",
        message: "Продуктът бе коригиран успешно!",
      };
    }
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Грешка!",
      message: error,
    };
  }

  return notification;
}
