import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticles, sortArticles } from "../../redux/article/article.action";
import { sortTypes } from "../../redux/article/article.type";
import ArticleItem from "../../components/article-item/article-item.component";
import Pagination from "../../components/pagination/pagination.component";
import Sort from '../../components/sorting/sort.component'
import "./article.styles.scss";

const Acticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState(sortTypes.DEFAULT);
  const listArticles = articles.map((item) => <ArticleItem article={item} />)
  const [page, setPage] = useState(1)
  const limit = 10    

  useEffect(() => {
    fetchListArticles();
  }, [page]);

  const fetchListArticles = async () => {
    await dispatch(fetchArticles({page: page, limit: limit}));
  };

  const searchButtonDidTap = async ()  => {
    await dispatch(fetchArticles({page: page, limit: limit, search: searchValue}));
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

  const sortButtonDidTap = () => {
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

  const onPageChange = async (currentPage:number) => {
    console.log('PAGE CHANGED');
    setPage(currentPage)
    fetchListArticles()
  }

  return (
    <div>
      <div className="search">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => searchButtonDidTap()}>Search</button>
      </div>
      <div className="sort">
        <button
          type="button"
          className={sortButtonStyles()}
          onClick={() => sortButtonDidTap()}
        >
          {'Sort '+sort}
        </button>
      </div>
      <ul className="list-unstyled">{listArticles}</ul>
      <div className="pagination">
      <Pagination totalItem={51} onPageChange={onPageChange}/>
      </div>
    </div>
  );
};

export default Acticle;
