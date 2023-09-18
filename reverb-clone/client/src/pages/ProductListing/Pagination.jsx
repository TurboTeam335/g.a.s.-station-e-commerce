import React from 'react';
import './Pagination.css'

const Pagination = () => {

  return (
    <div className="pagination-container">
      <button disabled> &lt;</button> {/* Make sure to conditionally enable/disable these based on the page number */}
      <div className="page-numbers">
      <span>2</span>
      <span>3</span>
    </div>
      <button> &gt; </button>
      <button> &gt;| </button>
    </div>
  );
}

export default Pagination;
