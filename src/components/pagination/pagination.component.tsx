import { useEffect, useState } from "react";
import { useSelector } from "../../redux/root-reducer";
import "./pagination.styles.scss";

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

  const showPageStyles = (value: number) => {
    if (value == currentPage) {
      return "page-link page--active";
    } else {
      return "page-link";
    }
  };

  const listPagination = range.map((value) => (
    <li className="page-item" onClick={() => pageDidTap(value)}>
      <a className={showPageStyles(value)} href="#">
        {value}
      </a>
    </li>
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
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={() => leftButtonDidTap()}>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {listPagination}
        <li className="page-item" onClick={() => rightButtonDidTap()}>
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
