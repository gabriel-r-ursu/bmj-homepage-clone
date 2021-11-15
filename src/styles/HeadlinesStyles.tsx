import styled from "styled-components";

const HeadlinesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

  line-height: 1.5rem;

  .headline {
    width: 100%;

    .main-headline-article .main-headline h2 {
      display: none;
    }

    .secondary-headline {
      width: 100%;
      padding-top: 1rem;

      .desktop-title {
        display: none;
      }
    }

    .headline-image {
      height: auto;
      width: 100%;
    }

    .category-and-date {
      span {
        padding: 0;
        font-size: 12px;
      }
    }

    .ltr {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;

      .bio {
        width: 50%;
      }

      .headline-img {
        width: 50%;
      }
    }
  }

  .separator {
    width: 100%;
    border-top: 1px solid #e5e6e6;
  }

  .aside-article {
    padding-top: 1rem;

    &:last-of-type > .separator {
      border: none;
    }

    .category-and-date {
      span {
        padding: 0;
        font-size: 12px;
      }
    }
  }

  @media (min-width: 600px) {
    .main-headline-article {
      padding-left: 1rem;
      background-color: #f2f2f2;
    }

    .main-headline {
      display: flex;
      flex-direction: row-reverse;

      text-align: left;

      .headline-bio {
        width: 50%;
      }

      .headline-image {
        width: 50%;
      }
    }

    .secondary-headlines {
      display: flex;
      gap: 2rem;

      .mobile-title {
        display: none;
      }

      .secondary-headline {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .ltr {
          flex-direction: column;
          width: 100%;

          .headline-img {
            width: 100%;
          }

          .bio {
            width: 100%;
          }
        }

        .desktop-title {
          display: block;
        }
      }
    }

    .aside-articles {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, 1fr);

      .aside-article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 960px) {
    flex-direction: row;
    gap: 2rem;

    .headline {
      width: 75%;

      .main-headline-article h2 {
        display: none;
      }

      .main-headline-article .main-headline h2 {
        display: block;
      }
    }

    .secondary-headline > .separator {
      display: none;
    }

    .aside-articles {
      display: flex;
      flex-direction: column;
      width: 25%;
    }
  }
`;

export default HeadlinesWrapper;
