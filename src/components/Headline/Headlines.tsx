import React from "react";
import HeadlinesWrapper from "../../styles/HeadlinesStyles";
import MainHeadlineSection from "./MainHeadlineSection";
// import Aside from "./Aside";

const Headlines: React.FC<{}> = () => {
  return (
    <HeadlinesWrapper>
      <MainHeadlineSection />
      {/* <Aside /> */}
    </HeadlinesWrapper>
  );
};

export default Headlines;
