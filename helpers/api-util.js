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

export async function getProductById(id) {
  const allProduct = await getProducts();
  return allProduct.find((product) => product.id === id);
}
