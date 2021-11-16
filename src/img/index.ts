import BabyBottle from "./baby-bottle.jpeg";
import Operation from "./operation.jpg";
import Microphone from "./microphone.jpg";
import CovidVaccine from "./covid-vaccine.jpg";
import VaccineAd from "./singapore-vaccine-advert.jpg";
import Defibrilator from "./defibrilator.jpg";
import CTScan from "./ct-scan.jpg";
import Data1 from "./data1.jpg";
import Planet from "./planet-stretcher.jpg";
import CovidProduction from "./covid-vaccine-production.jpg";
import VaccinatedWoman from "./pregnant-woman-vaccinated.jpg";
import LatestIssue from "./latest-issue.jpg";
import Alt1 from "./alt1.png";
import Alt2 from "./alt2.png";
import Alt3 from "./alt3.png";
import Alt4 from "./alt4.png";

const headerImage = { "/baby-bottle.jpeg": BabyBottle };

const headlineImages = {
  "./operation.jpg": Operation,
  "./microphone.jpg": Microphone,
  "./covid-vaccine.jpg": CovidVaccine,
};

const latestArticlesImages = {
  "./singapore-vaccine-advert.jpg": VaccineAd,
  "./operation.jpg": Operation,
  "./defibrilator.jpg": Defibrilator,
  "./ct-scan.jpg": CTScan,
};

const studiesImages = {
  "./data1.jpg": Data1,
  "./planet-stretcher.jpg": Planet,
  "./covid-vaccine-production.jpg": CovidProduction,
  "./pregnant-woman-vaccinated.jpg": VaccinatedWoman,
};

const latestIssue = { "./latest-issue.jpg": LatestIssue };

const altmetrics = {
  "./alt1.png": Alt1,
  "./alt2.png": Alt2,
  "./alt3.png": Alt3,
  "./alt4.png": Alt4,
};

export {
  headerImage,
  headlineImages,
  latestArticlesImages,
  studiesImages,
  latestIssue,
  altmetrics,
};
