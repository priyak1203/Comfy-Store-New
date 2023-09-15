import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

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

  // generate page button
  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs border-none sm:btn-md join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  // render page buttons to display
  const renderPageButtons = () => {
    const pageButtons = [];

    // display first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // add the dots before the current page if there are more than 2 pages
    if (page > 2) {
      pageButtons.push(
        <button className="btn btn-xs join-item sm:btn-md " key="dots-1">
          ...
        </button>
      );
    }

    // add the current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // add the dots before the last page if the current page is 1 less than last page
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn btn-xs join-item sm:btn-md " key="dots-2">
          ...
        </button>
      );
    }

    // display last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );

    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item" onClick={prevPage}>
          prev
        </button>
        {renderPageButtons()}
        <button className="btn btn-xs sm:btn-md join-item" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
