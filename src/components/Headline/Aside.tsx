import { headline } from "../../data/sitedata.json";

interface ArticleProps {
  title: string;
  category: string;
  publishDate: string;
}

const Aside = () => {
  const asideContent = headline.aside;
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
      <div className="title">{title}</div>
      <div className="category-and-date">
        <p>
          {category} | {publishDate}
        </p>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Aside;
