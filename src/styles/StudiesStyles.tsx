import styled from "styled-components";

const StudiesWrapper = styled.section`
  .study-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .studies {
    border-top: 2px solid #2a6eba;
  }

  .article-details {
    display: flex;
    width: 100%;
    gap: 1rem;

    .article-img {
      width: 50%;

      img {
        height: auto;
        width: 100%;
      }
    }

    .article-description {
      width: 50%;
    }
  }

  @media (min-width: 600px) {
    .study {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 960px) {
    .study-section {
      flex-direction: row;
      gap: 1rem;
      align-items: flex-start;
    }
  }
`;

export default StudiesWrapper;
