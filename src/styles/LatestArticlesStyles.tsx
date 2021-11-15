import styled from "styled-components";

const LatestArticlesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;

  h2 {
    padding: none;
  }

  img {
    height: auto;
    width: 100%;
  }

  .latest-articles-category {
    padding-bottom: 1rem;
  }

  .latest-articles-blue {
    border-top: 2px solid #2a6eba;
  }

  .latest-articles-purple {
    border-top: 2px solid #7e5ec4;
  }

  .latest-articles-red {
    border-top: 2px solid #cb2331;
  }

  .latest-articles-green {
    border-top: 2px solid #34b2a8;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default LatestArticlesWrapper;
