export async function deleteResponseHandler(itemId) {
  const deleteResponse = await fetch(
    `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery/${itemId}.json`,
    {
      method: "DELETE",
    }
  );

  return deleteResponse;
}
