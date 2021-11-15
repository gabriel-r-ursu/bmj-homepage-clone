import { headline } from "../../data/sitedata.json";
import { headlineImages } from "../../img";

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
            key={newsArticle.title}
            title={newsArticle.title}
            bio={newsArticle.bio}
            //@ts-ignore
            img={headlineImages[newsArticle.img]}
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
      <h3 className="mobile-title">{title}</h3>
      <div className="ltr">
        <div className="headline-img">
          <img src={img} alt="mock img" className="headline-image" />
        </div>
        <h3 className="desktop-title">{title}</h3>
        <div className="bio">
          <p>{bio}</p>
        </div>
      </div>
      <div className="category-and-date">
        <span>
          {category} | {date}
        </span>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default SecondaryHeadlines;
