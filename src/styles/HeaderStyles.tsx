import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;

  width: 100%;
  height: 60px;
  padding: 0 3rem 0 1rem;

  background-color: #2a6ebb;

  .menu {
    color: #ffffff;
    font-size: 30px;

    @media (min-width: 1280px) {
      visibility: hidden;
    }
  }

  .search {
    display: flex;
    align-items: center;

    position: relative;
    height: 100%;
    padding: 0 0.5rem;
    cursor: pointer;

    color: #77a2d3;

    span {
      color: white;
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }

  .search:hover {
    background-color: #4f89c7;
    color: white;
  }

  .logo {
    cursor: pointer;
  }
`;

export default HeaderWrapper;
