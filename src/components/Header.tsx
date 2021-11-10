import HeaderWrapper from "../styles/HeaderStyles";
import Menu from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import thebmjlogo from "../img/thebmjlogo.png";
import Navbar from "./Navbar/Navbar";

const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <Menu className="menu" />
      <img alt="the BMJ logo" src={thebmjlogo} className="logo" />
      <Navbar />
      <Search />
    </HeaderWrapper>
  );
};

function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <span>Search</span>
    </div>
  );
}

export default Header;
