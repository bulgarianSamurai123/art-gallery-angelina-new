export async function responseHandler(
  id,
  name,
  price,
  description,
  coverImage,
  isFeatured,
  date,
  translations = {}
) {
  const response = await fetch(
    `${process.env.firebase_products_url}/${id}.json`,
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
        // English translations (optional). Empty fields fall back to Bulgarian.
        name_en: translations.name_en || "",
        description_en: translations.description_en || "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
}
