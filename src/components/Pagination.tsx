import React from 'react';

interface PaginationProps {
  totalItems: any;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li
            key={pageNumber}
            className={`px-2 py-1 rounded-md cursor-pointer ${
              pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;