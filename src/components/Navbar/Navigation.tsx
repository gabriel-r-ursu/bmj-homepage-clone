import NavigationWrapper from "../../styles/NavigationStyles";

const Navigation: React.FC<{}> = () => {
  return (
    <NavigationWrapper>
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
    </NavigationWrapper>
  );
};

export default Navigation;
