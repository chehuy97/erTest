import "bootstrap/dist/css/bootstrap.css";
import { Article } from "../../redux/acticle/article.type";
import './article-item.scss'

type ArticleProps  = {
    article: Article
}

const ArticleItem = ({article}:ArticleProps) => {
  return (
    <li className="media" key={article.id}>
      <img src={article.image} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{article.title}</h5>
        {article.content}
      </div>
    </li>
  );
};

export default ArticleItem;
