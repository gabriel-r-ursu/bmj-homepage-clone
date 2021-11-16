import GlobalStyle from "./styles/globalStyles";
import AppContainer from "./styles/AppContainer";
import MainContainer from "./styles/MainContainer";
import Header from "./components/Header";
import Login from "./components/Login";
import XSHeaderAd from "./img/ads/XS-header-ad.png";
import Headlines from "./components/Headline/Headlines";
import LatestArticles from "./components/LatestArticles";
import Studies from "./components/Studies/Studies";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <img src={XSHeaderAd} alt="mock header ad" className="advertisment" />
      <p>Intended for healthcare professionals</p>
      <Login />
      <Header />
      <AppContainer>
        <Headlines />
        <LatestArticles />
        <Studies />
      </AppContainer>
    </MainContainer>
  );
}

export default App;
