import styled from "styled-components";

const MainContainer = styled.div<{ clicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .mobile {
    display: ${(props) => (props.clicked ? "grid" : "block")};
    ${(props) => (props.clicked ? "grid-template-columns: 1fr 3fr" : "")};
    width: 100%;
  }

  @media (min-width: 1280px) {
    .advertisment {
      padding: 75px 0;
    }
  }
`;

export default MainContainer;
