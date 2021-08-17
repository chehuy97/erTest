import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticles } from "../../redux/acticle/article.action";
import ArticleItem from "../../components/article-item/article-item.component";
import "./article.styles.scss";

const Acticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const [searchValue, setSearchValue] = useState("");
  const [filterArticles, setFilterArticles] = useState(articles);
  const listArticles =
    searchValue === ""
      ? articles.map((item) => <ArticleItem article={item} />)
      : filterArticles.map((   item) => <ArticleItem article={item} />);

  useEffect(() => {
    fetchListArticles();
  }, []);

  const fetchListArticles = async () => {
    await dispatch(fetchArticles());
  };

  const filterListArticles = (value:string) => {
    setSearchValue(value)
    let filters = articles.filter(
      (item) =>
        item.title.includes(value) || item.content.includes(value)
    );
    setFilterArticles(filters);
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
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button">
          Search
        </button>
      </div>
      <ul className="list-unstyled">{listArticles}</ul>
    </div>
  );
};

export default Acticle;
