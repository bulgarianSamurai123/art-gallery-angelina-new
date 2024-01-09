export async function getProducts() {
  const connectionString = `${process.env.firebase_url}/products.json`;
  const response = await fetch(connectionString);

  const data = await response.json();

  const products = [];

  for (const key in data) {
    const product = data[key];
    const dateObject = new Date(product.date);
    products.push({
      id: key,
      ...data[key],
      timestamp: dateObject.getTime(),
    });
  }

  const sortedData = products.sort((a, b) => b.timestamp - a.timestamp);

  return sortedData;
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
  const connectionString = `${process.env.firebase_url}/gallery.json`;
  const response = await fetch(connectionString);

  const data = await response.json();

  const galleryImages = [];

  for (const key in data) {
    const gallery = data[key];
    const dateObject = new Date(gallery.date);
    galleryImages.push({
      id: key,
      ...data[key],
      timestamp: dateObject.getTime(),
    });
  }

  const sortedData = galleryImages.sort((a, b) => b.timestamp - a.timestamp);

  return sortedData;
}

export const sendForm = async (content) => {
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
