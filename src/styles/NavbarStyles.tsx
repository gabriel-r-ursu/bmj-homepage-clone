import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  background-color: #2a6ebb;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    margin: 0 auto;
    height: 100%;
    max-width: 1280px;
  }

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
    padding: 0 1rem;
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

export default NavbarWrapper;
