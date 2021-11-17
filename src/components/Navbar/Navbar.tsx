import NavbarWrapper from "../../styles/NavbarStyles";
import Menu from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import thebmjlogo from "../../img/thebmjlogo.png";
import Navigation from "./Navigation";

const Navbar: React.FC<{}> = (): JSX.Element => {
  return (
    <NavbarWrapper>
      <div className="wrapper">
        <Menu className="menu" />
        <img alt="the BMJ logo" src={thebmjlogo} className="logo" />
        <Navigation />
        <Search />
      </div>
    </NavbarWrapper>
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

export default Navbar;
