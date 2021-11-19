import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #2a6ebb;

  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  * {
    color: white;
  }

  .wrapper {
    padding: 0 1rem;
  }

  h4 {
    padding: 1rem 0;
  }

  .socials-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    h4 {
      display: none;
    }

    .social {
      display: flex;
      gap: 0.5rem;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .footer-navigation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 2rem;
  }

  .category-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1.5rem 0;

    p {
      font-size: 0.8rem;
      font-weight: 400;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 600px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 3fr;
      align-items: start;

      width: 100%;

      h4 {
        display: none;
      }
    }

    .socials-wrapper {
      display: flex;
      flex-direction: column;

      h4 {
        display: block;
      }
    }

    .footer-navigation {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default FooterWrapper;
