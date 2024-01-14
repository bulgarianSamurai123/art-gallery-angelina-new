export async function responseHandler(
  id,
  name,
  price,
  description,
  coverImage,
  isFeatured,
  date
) {
  const response = await fetch(
    `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: name,
        price: price,
        description: description,
        coverImage: coverImage,
        isFeatured: isFeatured,
        date: date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
}
