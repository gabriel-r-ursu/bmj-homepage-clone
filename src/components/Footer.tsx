import FooterWrapper from "../styles/FooterStyles";
import { footer } from "../data/sitedata.json";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RssFeedIcon from "@mui/icons-material/RssFeed";

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
      <TermsAndConditions />
    </FooterWrapper>
  );
};

const Socials: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="socials-wrapper">
        <h4>Follow us on</h4>
        <div className="twitter social">
          <TwitterIcon />
          <p> Twitter</p>
        </div>
        <div className="facebook social">
          <FacebookIcon />
          <p>Facebook</p>
        </div>
        <div className="youtube social">
          <YouTubeIcon />
          <p>Youtube</p>
        </div>
        <div className="pinterest social">
          <PinterestIcon />
          <p>Pinterest</p>
        </div>
        <div className="rss social">
          <RssFeedIcon />
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

const TermsAndConditions: React.FC = (): JSX.Element => {
  return (
    <div className="terms-and-conditions">
      <div className="tnc-options">
        <div>
          <p>Cookie Settings</p>
        </div>
        <p>Cookie Policy</p>
        <p>Privacy Policy</p>
        <p>Website T&Cs</p>
        <p>Revenue Sources</p>
        <p>HighWire Press</p>
        <p>Sitemap</p>
      </div>
      <small>
        Copyright © 2021 BMJ Publishing Group Ltd京ICP备15042040号-3
      </small>
    </div>
  );
};

export default Footer;
