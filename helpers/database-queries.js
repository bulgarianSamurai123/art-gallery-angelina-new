import { db } from "../helpers/firebase";
import {
  ref,
  child,
  get,
  orderByChild,
  query,
  equalTo,
} from "firebase/database";
import { applyFilters } from "./filter-util";

export function getProductsQuery(
  currentPage,
  productsPerPage,
  setProducts,
  setTotalPages,
  setHasNextPage,
  abstractChecked,
  faceChecked,
  winterChecked,
  summerChecked
) {
  const dbRef = ref(db);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  let productFetchQuery = query(
    child(dbRef, process.env.firebase_product_db_name),
    orderByChild("id")
  );

  get(productFetchQuery)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const productsArray = Object.values(snapshot.val());
        productsArray.sort((a, b) => new Date(b.date) - new Date(a.date));

        const filteredProducts = applyFilters(
          abstractChecked,
          faceChecked,
          winterChecked,
          summerChecked,
          productsArray
        );

        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        setProducts(paginatedProducts);

        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        setTotalPages(totalPages);

        if (filteredProducts.length <= endIndex) {
          setHasNextPage(false);
        } else {
          setHasNextPage(true);
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function generatePageNumbers(currentPage, totalPages) {
  const pageNumbers = [];
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (startPage > 2) {
    pageNumbers.push(1);
    pageNumbers.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (totalPages > endPage + 1) {
      pageNumbers.push("...");
    }
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
}

export function getFeaturedProductsQuery(setProducts) {
  const dbRef = ref(db);

  let productFetchQuery = query(
    child(dbRef, process.env.firebase_product_db_name),
    orderByChild("isFeatured"),
    equalTo(true)
  );

  get(productFetchQuery)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const productsArray = Object.values(snapshot.val());
        productsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        setProducts(productsArray);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
