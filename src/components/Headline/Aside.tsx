interface AsideProps {
  data: any;
}

interface ArticleProps {
  title: string;
  category: string;
  publishDate?: string;
}

const Aside: React.FC<AsideProps> = ({ data }): JSX.Element => {
  return (
    <div className="aside-articles">
      {data.aside.map((article: any) => {
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
          {category} {publishDate}
        </span>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Aside;
