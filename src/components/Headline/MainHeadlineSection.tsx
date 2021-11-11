import React from "react";
import { headline } from "../../data/sitedata.json";
import SecondaryHeadlines from "./SecondaryHeadlines";

const MainHeadlineSection: React.FC = (): JSX.Element => {
  const mainHeadlineData = headline.main;

  return (
    <div className="headline">
      <div className="main-headline">
        <div className="text">
          <h2>{mainHeadlineData.title}</h2>
          <p>{mainHeadlineData.bio}</p>
        </div>
        <img
          src={mainHeadlineData.img}
          alt="baby bottle"
          className="headline-image"
        />
      </div>
      <SecondaryHeadlines />
    </div>
  );
};

export default MainHeadlineSection;
