import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import AppWrapper from "./styles/AppStyles";
import MainContainer from "./styles/MainContainer";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Navbar from "./components/Navbar/Navbar";
import { HeaderWrapper } from "./styles/HeaderStyles";
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
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <MainContainer clicked={click}>
      <GlobalStyle />
      <img
        src={XSHeaderAd}
        alt="mock header ad"
        className="advertisment"
        onClick={closeMobileMenu}
      />
      <p>Intended for healthcare professionals</p>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <div className="mobile">
        <MobileNavbar clicked={click} />
        <div>
          <Navbar handleClick={handleClick} />
          <AppWrapper onClick={closeMobileMenu}>
            <Headlines />
            <LatestArticles />
            <Studies />
            <CurrentIssue />
            <MostRead />
          </AppWrapper>
          <Community />
          <Footer />
        </div>
      </div>
    </MainContainer>
  );
}

export default App;
