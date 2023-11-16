export async function getProducts() {
  const response = await fetch(process.env.FIREBASE_URL);

  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    });
  }

  return products;
}

export async function getFeaturedProducts() {
  const allProducts = await getProducts();
  return allProducts.filter((product) => product.isFeatured);
}

export async function getProductById(id) {
  const allProduct = await getProducts();
  return allProduct.find((product) => product.id === id);
}

export async function getGallery() {
  const response = await fetch(
    "https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/gallery.json"
  );

  const data = await response.json();

  const galleryImages = [];

  for (const key in data) {
    galleryImages.push({
      id: key,
      ...data[key],
    });
  }

  return galleryImages;
}

export const sendContactForm = async (content) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};
