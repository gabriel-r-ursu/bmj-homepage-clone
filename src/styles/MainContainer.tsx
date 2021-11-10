import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  p {
    padding: 0.5rem 0;

    font-size: 0.9rem;
    font-weight: 100;
    color: #494c4d;
  }

  .advertisment {
    @media (min-width: 1280px) {
      padding: 75px 0;
    }
  }
`;

export default MainContainer;
