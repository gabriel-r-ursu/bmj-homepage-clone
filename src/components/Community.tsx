import CommunityWrapper from "../styles/CommunityStyles";
import { community, altmetrics } from "../data/sitedata.json";
import { altmetricsImages } from "../img";

interface CommunityProps {
  data: string[];
}

interface AltmetricsProps {
  altdata: { title: string; img: string; date: string }[];
}

const Community: React.FC = (): JSX.Element => {
  return (
    <CommunityWrapper>
      <div className="wrapper">
        <div className="section-title">
          <h2>Community</h2>
        </div>
        <div className="content">
          <div className="responses-and-poll">
            <div className="responses">
              <h3>{community.category}</h3>
              <Response data={community.responses} />
              <div className="view-more">
                <p>View More</p>
              </div>
            </div>
            <Poll />
          </div>
          <div className="altmetrics">
            <div className="category-title">
              <h3>{altmetrics.category}</h3>
            </div>
            <Altmetric altdata={altmetrics.titles} />
          </div>
        </div>
      </div>
    </CommunityWrapper>
  );
};

const Response: React.FC<CommunityProps> = ({ data }): JSX.Element => {
  return (
    <>
      {data.map((response: string) => {
        return (
          <div key={response} className="response">
            <p>{response}</p>
          </div>
        );
      })}
    </>
  );
};

const Poll = () => {
  return (
    <div className="poll">
      <div>
        <h3 className="poll-title">What are your thoughts?</h3>
        <p>Is it my moral duty to cover shifts in the absence of staff?</p>
        <div className="poll-options">
          <div className="poll-option">
            <input type="radio" id="answer1" name="poll-option" value="Yes" />
            <label htmlFor="answer1">Yes</label>
          </div>
          <div className="poll-option">
            <input type="radio" id="answer2" name="poll-option" value="No" />
            <label htmlFor="answer2">No</label>
          </div>
        </div>
        <div className="vote-buttons">
          <button>Vote</button>
          <p>View Results</p>
        </div>
      </div>
      <div className="related-content">
        <p className="related-article">Read Related Article</p>
        <p className="past-polls">See all polls</p>
      </div>
    </div>
  );
};

const Altmetric: React.FC<AltmetricsProps> = ({ altdata }): JSX.Element => {
  return (
    <>
      {altdata.map((title) => {
        return (
          <div key={title.title} className="altmetric">
            <div className="alt-data-img">
              {/*@ts-ignore*/}
              <img src={altmetricsImages[title.img]} alt="metric" />
            </div>
            <div className="title-and-date">
              <p>{title.title}</p>
              <span>{title.date}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Community;
