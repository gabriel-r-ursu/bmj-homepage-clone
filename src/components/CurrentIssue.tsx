import CurrentIssueWrapper from "../styles/CurrentIssueStyles";
import { magazine } from "../data/sitedata.json";
import { latestIssue } from "../img";
import PrefooterAd from "../img/ads/prefooter-ad.png";

interface articleProps {
  data: any;
}

const ArticleTitles: React.FC<articleProps> = ({ data }) => {
  return (
    <div className="articles">
      {data.articles.map((article: any) => {
        return (
          <div className="article">
            <div className="title">
              <h4>{article.title}</h4>
            </div>
            <div className="category-and-date">
              <span>
                <span className="category">{article.category}</span>{" "}
                {article.publishDate}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CurrentIssue: React.FC = (): JSX.Element => {
  return (
    <CurrentIssueWrapper>
      <div className="current-issue-content">
        <div className="title">
          <h3>{magazine.title}</h3>
        </div>
        <div className="page-and-articles">
          <div className="issue-img-btn">
            {/*@ts-ignore*/}
            <img src={latestIssue[magazine.img]} alt="lastet issue" />
            <div className="issue-buttons">
              <span>All Issues</span>
              <span>Past Issues</span>
            </div>
          </div>
          <ArticleTitles data={magazine} />
        </div>
      </div>
      <div className="advertisment">
        <img src={PrefooterAd} alt="advertisment" />
      </div>
    </CurrentIssueWrapper>
  );
};

export default CurrentIssue;
