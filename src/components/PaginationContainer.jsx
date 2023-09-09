import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { pathname, search } = useLocation();

  const navigate = useNavigate();

  // fetch products on page change
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  // prev page
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) newPage = pageCount;
    handlePageChange(newPage);
  };

  // next page
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > pageCount) newPage = 1;
    handlePageChange(newPage);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item" onClick={prevPage}>
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs border-none sm:btn-md join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button className="btn btn-xs sm:btn-md join-item" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
