export async function addMessage(content, apiRoute) {
  const response = await fetch(`/api/contact-us/questions/${apiRoute}`, {
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
