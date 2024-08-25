

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPagesToShow = 5; // Number of page numbers to show

  for (let i = 1; i <= Math.min(totalPages, maxPagesToShow); i++) {
    pageNumbers.push(i);
  }

  // Calculate the start and end page numbers to show
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      {startPage > 1 && totalPages > maxPagesToShow && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
          >
            1
          </button>
          <span className="px-4 py-2 text-white">...</span>
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && totalPages > maxPagesToShow && (
        <>
          <span className="px-4 py-2 text-white">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
