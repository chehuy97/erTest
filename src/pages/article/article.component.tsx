import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticles, sortArticles } from "../../redux/acticle/article.action";
import { sortTypes } from "../../redux/acticle/article.type";
import ArticleItem from "../../components/article-item/article-item.component";
import Pagination from "../../components/pagination/pagination.component";
import "./article.styles.scss";

const Acticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const [searchValue, setSearchValue] = useState("");
  const [filterArticles, setFilterArticles] = useState(articles);
  const [sort, setSort] = useState(sortTypes.DEFAULT);
  const listArticles =
    searchValue === ""
      ? articles.map((item) => <ArticleItem article={item} />)
      : filterArticles.map((item) => <ArticleItem article={item} />);

  useEffect(() => {
    fetchListArticles();
  }, []);

  const fetchListArticles = async () => {
    await dispatch(fetchArticles());
  };

  const filterListArticles = (value: string) => {
    setSearchValue(value);
    let filters = articles.filter(
      (item) => item.title.includes(value) || item.content.includes(value)
    );
    setFilterArticles(filters);
  };

  const sortButtonStyles = () => {
    switch (sort) {
      case sortTypes.UP:
        return "btn btn-success";
      case sortTypes.DOWN:
        return "btn btn-danger";
      default:
        return "btn btn-light";
    }
  };

  const handleSortClick = () => {
    let sortType = sortTypes.DEFAULT
    switch (sort) {
      case sortTypes.UP:
        sortType = sortTypes.DOWN;
        break;
      case sortTypes.DOWN:
        sortType = sortTypes.UP;
        break;
      default:
        sortType = sortTypes.UP;
    }
    dispatch(sortArticles(sortType))
    setSort(sortType)
  };

  return (
    <div>
      <div className="search">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => filterListArticles(e.target.value)}
        />
      </div>
      <div className="sort">
        <button
          type="button"
          className={sortButtonStyles()}
          onClick={() => handleSortClick()}
        >
          {'Sort '+sort}
        </button>
      </div>
      <ul className="list-unstyled">{listArticles}</ul>
      {/* <div className="nav">
        <Pagination articles={articles}/>
      </div> */}
    </div>
  );
};

export default Acticle;
