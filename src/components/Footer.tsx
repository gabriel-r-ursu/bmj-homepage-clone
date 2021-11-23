import FooterWrapper from "../styles/FooterStyles";
import { footer, tnc } from "../data/sitedata.json";
import {
  Twitter,
  Facebook,
  YouTube,
  Pinterest,
  RssFeed,
} from "@mui/icons-material";

interface FooterNavigationProps {
  data: { category: string; options: string[] }[];
}

interface OptionsProps {
  options: string[];
}

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <h4>Follow us on</h4>
        <Socials />
        <FooterNavigation data={footer} />
      </div>
      <TermsAndConditions options={tnc} />
    </FooterWrapper>
  );
};

const Socials: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="socials-wrapper">
        <h4>Follow us on</h4>
        <div className="social">
          <Twitter />
          <p> Twitter</p>
        </div>
        <div className="social">
          <Facebook />
          <p>Facebook</p>
        </div>
        <div className="social">
          <YouTube />
          <p>Youtube</p>
        </div>
        <div className="social">
          <Pinterest />
          <p>Pinterest</p>
        </div>
        <div className="social">
          <RssFeed />
          <p>RSS</p>
        </div>
      </div>
    </>
  );
};

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  data,
}): JSX.Element => {
  return (
    <div className="footer-navigation">
      {data.map((category) => {
        return (
          <div key={category.category}>
            <div className="category-title">
              <h3>{category.category}</h3>
              <CategoryOptions options={category.options} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CategoryOptions: React.FC<OptionsProps> = ({ options }): JSX.Element => {
  return (
    <div className="category-options">
      {options.map((option) => {
        return <p key={option}> {option}</p>;
      })}
    </div>
  );
};

const TermsAndConditions: React.FC<OptionsProps> = ({
  options,
}): JSX.Element => {
  return (
    <div className="terms-and-conditions">
      <div className="tnc-options">
        {options.map((option) => {
          return <p key={option}>{option}</p>;
        })}
      </div>
      <small>
        <span>Copyright © 2021 BMJ Publishing GroupLtd</span>
        <span>京ICP备15042040号-3</span>
      </small>
    </div>
  );
};

export default Footer;
