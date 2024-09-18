import React, { useEffect } from "react";

import { generatePageNumbers } from "../../helpers/database-queries";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  hasNextPage,
}) => {
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [prevPage])

  return (
    <div className="w-full flex flex-row gap-4 justify-center mt-20 mb-20 xl:mb-0">
      <button
        className="border rounded-md border-gray-190 w-10 flex justify-center items-center disabled:text-gray-190 disabled:border-gray-800"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5_49)">
            <path
              d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_49">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {generatePageNumbers(currentPage, totalPages).map((pageNumber, index) => (
        <button
          className={`w-10 py-2 border rounded-md ${
            currentPage === pageNumber
              ? "border-purple-121 bg-purple-233 text-purple-121"
              : "border-gray-190"
          }`}
          key={index}
          onClick={() => {
            if (pageNumber !== "...") {
              goToPage(pageNumber);
            }
          }}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="border rounded-md border-gray-190 w-10 flex justify-center items-center disabled:text-gray-190 disabled:border-gray-800"
        onClick={nextPage}
        disabled={!hasNextPage}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_10_129)">
            <path
              d="M8.58997 16.59L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_129">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
