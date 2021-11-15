import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  .advertisment {
    @media (min-width: 1280px) {
      padding: 75px 0;
    }
  }
`;

export default MainContainer;
