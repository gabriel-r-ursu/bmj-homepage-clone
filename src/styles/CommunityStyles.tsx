import styled from "styled-components";

const CommunityWrapper = styled.section`
  width: 100%;

  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .responses,
  .poll,
  .altmetrics {
    border-top: 2px solid #2a6eba;
  }

  .section-title {
    justify-self: flex-start;
  }

  .response {
    padding: 1rem 0;
    border-bottom: 1px solid #e5e6e6;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .view-more {
    margin: 0.5rem 0 1rem 0;
  }

  .view-more p,
  .vote-buttons p,
  .related-content p {
    color: #2a6eba;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .poll-options {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .poll-option {
      display: flex;
      align-items: center;
      gap: 1rem;

      input[type="radio" i] {
        transform: scale(2);
      }
    }
  }

  .vote-buttons {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem 0;

    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: #2a6eba;
    }
  }

  .related-content {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-top: 1px solid #e5e6e6;
  }

  .altmetrics {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .altmetric {
    display: grid;
    grid-template-columns: 60px 3fr;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    img {
      height: auto;
      width: 100%;
    }

    span {
      font-weight: 300;
      font-size: 12px;
    }
  }

  @media (min-width: 600px) {
    background-color: #f2f2f2;

    .responses-and-poll {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .poll {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 960px) {
    .content {
      display: flex;
      gap: 2rem;
    }
    .responses-and-poll {
      width: 66%;
    }

    .altmetrics {
      width: 33%;
    }
  }
`;

export default CommunityWrapper;
