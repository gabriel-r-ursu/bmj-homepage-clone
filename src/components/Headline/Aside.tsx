import { headline } from "../../data/sitedata.json";

interface ArticleProps {
  title: string;
  category: string;
  publishDate?: string;
}

const asideContent = headline.aside;

const Aside = () => {
  return (
    <div className="aside-articles">
      {asideContent.map((article) => {
        return (
          <Article
            key={article.title}
            title={article.title}
            category={article.category}
            publishDate={article.publishDate}
          />
        );
      })}
    </div>
  );
};

const Article: React.FC<ArticleProps> = ({
  title,
  category,
  publishDate,
}): JSX.Element => {
  return (
    <div className="aside-article">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="category-and-date">
        <span>
          {category} | {publishDate}
        </span>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Aside;
