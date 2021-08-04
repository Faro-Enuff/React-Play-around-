const PaginationFeat = ({ changePagePrevious, changePageNext }) => {
  return (
    <div className="pagination-component">
      <button className="previous" onClick={changePagePrevious}>
        Previous
      </button>
      {/* <p>Page {currentPage}</p> */}
      <button className="next" onClick={changePageNext}>
        Next
      </button>
    </div>
  );
};

export default PaginationFeat;
