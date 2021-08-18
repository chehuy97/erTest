import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticles } from "../../redux/article/article.action";
import ArticleItem from "../../components/article-item/article-item.component";
import Pagination from "../../components/pagination/pagination.component";
import Sort from "../../components/sorting/sort.component";
import "./article.styles.scss";

const Acticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const [searchValue, setSearchValue] = useState("");
  const listArticles = articles.map((item) => <ArticleItem article={item} />);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderby] = useState("");
  const articleRequest = {
    page: page,
    limit: limit,
    search: searchValue,
    sortBy: sortBy,
    order: orderBy,
  };

  useEffect(() => {
    fetchListArticles();
  }, [page, sortBy, orderBy]);

  const fetchListArticles = async () => {
    console.log("ARTICLE REQUEST IS ", articleRequest);
    await dispatch(fetchArticles(articleRequest));
  };

  const onPageChange = (currentPage: number) => {
    setPage(currentPage);
    fetchListArticles();
  };

  const onSortchange = (sortBy: string, orderBy: string) => {
    console.log('sort is ',sortBy, orderBy);
    
    setSortBy(sortBy);
    setOrderby(orderBy);
    fetchListArticles();
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
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={() => fetchListArticles()}
        >
          Search
        </button>
      </div>
      <Sort onSortchange={onSortchange} />
      <ul className="list-unstyled">{listArticles}</ul>
      <div className="pagination">
        <Pagination isFullOfLimit={articles.length == limit ? true : false} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default Acticle;
