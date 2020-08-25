import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoNextPage && (
        <button
          onClick={gotoNextPage}
          type="button"
          class="btn btn-primary btn-lg btn-block"
        >
          Next
        </button>
      )}
      {gotoPrevPage && (
        <button
          onClick={gotoPrevPage}
          type="button"
          class="btn btn-warning btn-lg btn-block"
        >
          Previous
        </button>
      )}
    </div>
  );
}
