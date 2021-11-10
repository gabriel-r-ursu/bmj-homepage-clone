import NavbarWrapper from "../../styles/NavbarStyles";

const Navbar: React.FC<{}> = () => {
  return (
    <NavbarWrapper>
      <ul className="menu-1">
        <li>covid-19</li>
        <li>
          Research <span>&or;</span>
        </li>
        <li>
          Education <span>&or;</span>
        </li>
        <li>
          News & Views <span>&or;</span>
        </li>
        <li>
          Campaigns <span>&or;</span>
        </li>
        <li>
          Jobs <span>&or;</span>
        </li>
      </ul>
      <ul className="menu-2">
        <li>Archive</li>
        <li>For authors</li>
        <li>Hosted</li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
