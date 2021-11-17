import StudiesWrapper from "../../styles/StudiesStyles";
import Study from "./Study";
import { cop26, covid19, jobs } from "../../data/sitedata.json";
import MidPageAD from "../../img/ads/mid-page-ad.png";
import ArticlesWithoutImages from "../ArticlesWithoutImages";

const Studies: React.FC = (): JSX.Element => {
  return (
    <StudiesWrapper>
      <div className="study-section">
        <Study data={cop26} />
        <div className="mid-page-ad">
          <img src={MidPageAD} alt="advertisement" />
        </div>
      </div>
      <div className="study-section">
        <div className="study-wrapper">
          <Study data={covid19} />
        </div>
        <div className="jobs">
          <h2>{jobs.category}</h2>
          <div className="jobs-list">
            <ArticlesWithoutImages data={jobs} />
          </div>
        </div>
      </div>
    </StudiesWrapper>
  );
};

export default Studies;
