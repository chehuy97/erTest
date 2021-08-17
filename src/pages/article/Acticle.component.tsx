import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticles } from "../../redux/acticle/article.action";
import ArticleItem from '../../components/article-item/article-item.component'

const Acticle = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.article.articles)
  const listArticles = articles.map( item => <ArticleItem article={item}/>)

  useEffect(() => {
    fetchListArticles()
  },[]);

  const fetchListArticles = async () => {
    await dispatch(fetchArticles());
  }

  return (
    <div>
      <ul className="list-unstyled">
        {listArticles}
      </ul>
    </div>
  );
};

export default Acticle;
