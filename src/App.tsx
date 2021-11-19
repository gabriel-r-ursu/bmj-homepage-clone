import GlobalStyle from "./styles/globalStyles";
import AppWrapper from "./styles/AppStyles";
import MainContainer from "./styles/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import XSHeaderAd from "./img/ads/XS-header-ad.png";
import Headlines from "./components/Headline/Headlines";
import LatestArticles from "./components/LatestArticles";
import Studies from "./components/Studies/Studies";
import CurrentIssue from "./components/CurrentIssue";
import MostRead from "./components/MostRead";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <img src={XSHeaderAd} alt="mock header ad" className="advertisment" />
      <p>Intended for healthcare professionals</p>
      <Header />
      <Navbar />
      <AppWrapper>
        <Headlines />
        <LatestArticles />
        <Studies />
        <CurrentIssue />
        <MostRead />
      </AppWrapper>
      <Community />
      <Footer />
    </MainContainer>
  );
}

export default App;
