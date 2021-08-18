import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./sort.styles.scss";

const sortByTypes = {
  CREATE_AT: "createdAt",
  TITLE: "title",
  CONTENT: "content",
};
const orderByTypes = {
  ASC: "asc",
  DESC: "desc",
};

type props = {
  onSortchange: (sortBy:string, orderBy:string) => void
}

const Sort = ({onSortchange}:props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(sortByTypes.TITLE);
  const [orderBy, setOrderBy] = useState(orderByTypes.ASC);
  const menuClass = `dropdown-menu ${isOpen ? "show" : ""}`; 

  const ordeByButtonDidTap = () => {
    let orderByType = ''
    if(orderBy === orderByTypes.ASC) {
      orderByType = orderByTypes.DESC
    } else {
      orderByType = orderByTypes.ASC
    }
    setOrderBy(orderByType)
    onSortchange(sortBy, orderByType)
  }

  const sortbyButtonDidTap = (sortByType:string) => {
    setSortBy(sortByType)
    onSortchange(sortByType, orderBy)
  }

  return (
    <div className="sort sort__container" >
      <div className="dropdown dropdown__container" onClick={() => setIsOpen(!isOpen)}>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {sortBy}
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={() => sortbyButtonDidTap(sortByTypes.TITLE)}>
            {sortByTypes.TITLE}
          </a>
          <a className="dropdown-item" href="#" onClick={() => sortbyButtonDidTap(sortByTypes.CONTENT)}>
            {sortByTypes.CONTENT}
          </a>
          <a className="dropdown-item" href="#" onClick={() => sortbyButtonDidTap(sortByTypes.CREATE_AT)}>
            {sortByTypes.CREATE_AT}
          </a>
        </div>
      </div>
      <button type="button" onClick={() => ordeByButtonDidTap()} className={orderBy === orderByTypes.ASC ? "btn btn-success" : "btn btn-danger"}>{orderBy}</button>
    </div>
  );
};

export default Sort;
