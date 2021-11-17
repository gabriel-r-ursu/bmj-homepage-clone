import HeaderWrapper from "../styles/HeaderStyles";

const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <div className="wrapper">
        <div className="menubar">
          <span>Our Company</span>
          <span>Subscribe</span>
          <span>My Account</span>
          <span>Login</span>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
