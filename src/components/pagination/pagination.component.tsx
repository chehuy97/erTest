import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

type props = {
  totalItem: number;
  onPageChange: (currentPage: number) => void;
};

const Pagination = ({ totalItem, onPageChange }: props) => {
  const totalPage = Math.ceil(totalItem / 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [range, setRange] = useState([1]);

  useEffect(() => {
    showPageNumber();
  }, [currentPage]);


  const listPagination = range.map((value) => (
    <li className={value === currentPage ? "page-item page-abc active" : "page-item page-abc"} onClick={() => pageDidTap(value)}><a className="page-link" href="#">{value}</a></li>
  ));

  const leftButtonDidTap = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
      setCurrentPage(currentPage - 1);
      showPageNumber();
    }
  };

  const rightButtonDidTap = () => {
    if (currentPage !== totalPage) {
      onPageChange(currentPage + 1)
      setCurrentPage(currentPage + 1);
      showPageNumber();

    }
  };

  const pageDidTap = (page: number) => {
    console.log("Page is " + page + " and " + currentPage);

    if (currentPage !== page) {
      setCurrentPage(page);
      onPageChange(page)
      showPageNumber();
    }
  };

  const showPageNumber = () => {
    console.log("Current Page ", currentPage);

    let range = [];
    if (currentPage === 1) {
      if (totalPage === 1) {
        range.push(1);
      } else if (totalPage === 2) {
        range.push(1, 2);
      } else {
        range.push(1, 2, 3);
      }
    } else if (currentPage === totalPage) {
      range.push(currentPage - 2, currentPage - 1, currentPage);
    } else {
      range.push(currentPage - 1, currentPage, currentPage + 1);
    }
    setRange(range);
  };

  return (
    <nav aria-label="...">
  <ul className="pagination">
    <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
      <a className="page-link" href="#" aria-disabled={currentPage === 1 ? "true" : "false"} onClick={() => leftButtonDidTap()}>Previous</a>
    </li>
    {listPagination}
    <li className={currentPage === totalPage ? "page-item disabled" : "page-item"}>
      <a className="page-link" href="#" aria-disabled={currentPage === totalPage ? "true" : "false"} onClick={() => rightButtonDidTap()}>Next</a>
    </li>
  </ul>
</nav>
  );
};

export default Pagination;
