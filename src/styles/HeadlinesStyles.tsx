import styled from "styled-components";

const HeadlinesWrapper = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

  line-height: 1.5rem;

  .headline {
    width: 100%;

    h2 {
      font-size: 1.5rem;
    }
  }

  .secondary-headline {
    width: 100%;
  }

  .headline-image {
    height: auto;
    width: 100%;
  }

  .category-and-date {
    display: flex;

    p {
      font-size: 12px;
    }
  }

  .ltr {
    display: flex;
    width: 100%;

    .bio {
      width: 50%;
    }

    .headline-img {
      width: 50%;
    }
  }
`;

export default HeadlinesWrapper;
