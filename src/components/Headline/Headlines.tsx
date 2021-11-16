import React from "react";
import HeadlinesWrapper from "../../styles/HeadlinesStyles";
import MainHeadlineSection from "./MainHeadlineSection";
import Aside from "./Aside";
import { headline } from "../../data/sitedata.json";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <HeadlinesWrapper>
      <MainHeadlineSection />
      <Aside data={headline} />
    </HeadlinesWrapper>
  );
};

export default Headlines;
