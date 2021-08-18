import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type props = {
  isFullOfLimit: boolean;
  onPageChange: (currentPage: number) => void;
};

const Pagination = ({ isFullOfLimit, onPageChange }: props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const leftButtonDidTap = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
      setCurrentPage(currentPage - 1);
    }
  };

  const rightButtonDidTap = () => {
    if (isFullOfLimit) {
      onPageChange(currentPage + 1)
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="...">
  <ul className="pagination">
    <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
      <a className="page-link" href="#" aria-disabled={currentPage === 1 ? "true" : "false"} onClick={() => leftButtonDidTap()}>Previous</a>
    </li>
    <li className="page-item active"><a className="page-link" href="#">{currentPage}</a></li>
    <li className={!isFullOfLimit ? "page-item disabled" : "page-item"}>
      <a className="page-link" href="#" aria-disabled={!isFullOfLimit ? "true" : "false"} onClick={() => rightButtonDidTap()}>Next</a>
    </li>
  </ul>
</nav>
  );
};

export default Pagination;
