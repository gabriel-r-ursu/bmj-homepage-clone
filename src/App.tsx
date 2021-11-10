import GlobalStyle from "./styles/globalStyles";
import AppContainer from "./styles/AppContainer";
import MainContainer from "./styles/MainContainer";
import Header from "./components/Header";
import Login from "./components/Login";
import XSHeaderAd from "./img/ads/XS-header-ad.png";

function App() {
  return (
    <MainContainer>
      <img src={XSHeaderAd} alt="mock header ad" className="advertisment" />
      <p>Intended for healthcare professionals</p>
      <Login />
      <Header />
      <AppContainer>
        <GlobalStyle />
      </AppContainer>
    </MainContainer>
  );
}

export default App;
