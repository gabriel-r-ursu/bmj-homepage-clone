import StudiesWrapper from "../../styles/StudiesStyles";
import Aside from "../Headline/Aside";
import Study from "./Study";
import { cop26, covid19, jobs } from "../../data/sitedata.json";
import MidPageAD from "../../img/ads/mid-page-ad.png";

const Studies: React.FC = (): JSX.Element => {
  return (
    <StudiesWrapper>
      <div className="study-section">
        <Study data={cop26} />
        <img src={MidPageAD} alt="advertisement" />
      </div>
      <div className="study-section">
        <Study data={covid19} />
        <Aside data={jobs} />
      </div>
    </StudiesWrapper>
  );
};

export default Studies;
