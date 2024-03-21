export const applyFilters = (
  abstractChecked,
  faceChecked,
  winterChecked,
  summerChecked,
  products
) => {
  const filters = [];

  if (abstractChecked)
    filters.push(/^(abstract\d+(-dev)?)|(abstraction\d+(-dev)?)$/i);
  if (faceChecked) filters.push(/^face\d+(-dev)?$/i);
  if (winterChecked) filters.push(/^ski\d+(-dev)?$/i);
  if (summerChecked) filters.push(/^summer\d+(-dev)?$/i);

  if (filters.length === 0) return products;

  return products.filter((product) =>
    filters.some((filter) => filter.test(product.id))
  );
};
