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
      // PATCH updates only these fields and keeps anything else stored on the product
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        name: name,
        price: price,
        description: description,
        coverImage: coverImage,
        isFeatured: isFeatured,
        date: date,
        // English translations. Empty fields fall back to Bulgarian on the site.
        name_en: translations.name_en ?? "",
        description_en: translations.description_en ?? "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
}
