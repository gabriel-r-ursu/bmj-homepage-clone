import { headline } from "../../data/sitedata.json";

interface MainHeadlineProps {
  title: string;
  bio: string;
  img: string;
  category: string;
  date: string;
}

const SecondaryHeadlines: React.FC = (): JSX.Element => {
  const secondaryHeadlineData = headline.titles;
  return (
    <div className="secondary-headlines">
      {secondaryHeadlineData.map((newsArticle) => {
        return (
          <SecondaryHeadline
            title={newsArticle.title}
            bio={newsArticle.bio}
            img={newsArticle.img}
            category={newsArticle.category}
            date={newsArticle.publishDate}
          />
        );
      })}
    </div>
  );
};

const SecondaryHeadline: React.FC<MainHeadlineProps> = ({
  title,
  bio,
  img,
  category,
  date,
}): JSX.Element => {
  return (
    <div className="secondary-headline">
      <h3>{title}</h3>
      <div className="ltr">
        <div className="bio">
          <p>{bio}</p>
        </div>
        <div className="headline-img">
          <img src={img} alt="mock img" className="headline-image" />
        </div>
      </div>
      <div className="category-and-date">
        <p>
          {category} | {date}
        </p>
      </div>
    </div>
  );
};

export default SecondaryHeadlines;
