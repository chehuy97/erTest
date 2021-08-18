import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Article } from "../../redux/article/article.type";

type props = {
  articles: Article[],
  onPageChange: (page:any) => void
}

const Pagination = ({articles, onPageChange}:props) => {
  const totalRecords = articles.length
  const pageLimit = 10
  const pageNeighbours = 2
  const totalPages = Math.ceil(totalRecords/pageLimit)
  const [currentPage, setCurrentPage] = useState(1)
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';

  const range = (from:number, to:number, step = 1):any[] => {
    let i = from
    const range:number[] = []
    while(i <= to){
      range.push(i)
      i += step
    }
    return range
  }

  const fetchPageNumbers = () => {
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  const gotoPage = (page:any) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords
    };
    setCurrentPage(currentPage)
    onPageChange(paginationData)
  }

  const handleClick = (page:any, evt:any) => {
    evt.preventDefault();
    gotoPage(page);
  }

  const handleMoveLeft = (evt:any) => {
    evt.preventDefault();
    gotoPage(currentPage - (pageNeighbours * 2) - 1);
  }

  const handleMoveRight = (evt:any) => {
    evt.preventDefault();
    gotoPage(currentPage + (pageNeighbours * 2) + 1);
  }

  const pages = fetchPageNumbers()

  return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
          { pages.map((page, index) => {

            if (page === LEFT_PAGE) return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={evt => handleMoveLeft(evt)}>
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
            );

            if (page === RIGHT_PAGE) return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={evt => handleMoveRight(evt)}>
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            );

            return (
              <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                <a className="page-link" href="#" onClick={evt => handleClick(page, evt) }>{ page }</a>
              </li>
            );

          }) }
        </ul>
      </nav>
    )
}

export default Pagination