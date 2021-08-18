import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import "./articleDetail.styles.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/root-reducer";
import { fetchArticleDetail } from "../../redux/acticle/article.action";

type routeParams = {
  articleId: string;
};

const ArticleDetail = () => {
  const match = useRouteMatch<routeParams>();
  const dispatch = useDispatch();
  const articleDetail = useSelector((state) => state.article.articleDetail);
  useEffect(() => {
    console.log("props is " + match.params.articleId);
    fetchArticleDetailData();
  }, []);

  const fetchArticleDetailData = async () => {
    await dispatch(fetchArticleDetail(match.params.articleId));
    console.log('Article Detail is ', articleDetail);
    
  };

  return (
    <div className="detailContainer">
      <div className="block">
        <p className="block__title">{articleDetail.title}</p>
        <img src={articleDetail.image} className="block__image" alt="article"/>
        <p className="block__content">{articleDetail.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
