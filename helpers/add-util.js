export async function addQuestion(content) {
  const response = await fetch("/api/questions", {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export async function addMessage(content) {
  const response = await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}
