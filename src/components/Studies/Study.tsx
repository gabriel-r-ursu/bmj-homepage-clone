import { studiesImages } from "../../img";
import Aside from "../Headline/Aside";

interface StudyProps {
  data: any;
}

const Article: React.FC<StudyProps> = ({ data }) => {
  return (
    <>
      {data.headlines.map((headline: any) => {
        return (
          <div className="study-article">
            <h2>{headline.title}</h2>
            <div className="article-details">
              <div className="article-img">
                {/*@ts-ignore*/}
                <img src={studiesImages[headline.img]} alt="img" />
              </div>
              <div className="article-description">
                <p>{headline.description}</p>
              </div>
            </div>
            <p>
              {headline.category} | {headline.publishDate}
            </p>
          </div>
        );
      })}
    </>
  );
};

const Study: React.FC<StudyProps> = ({ data }): JSX.Element => {
  return (
    <div className="studies">
      <h2>{data.category}</h2>
      <div className="study">
        <div className="study-wrapper">
          <Article key={data.title} data={data} />
        </div>
        <div className="aside-articles">
          <Aside data={data} />
        </div>
      </div>
    </div>
  );
};

export default Study;
