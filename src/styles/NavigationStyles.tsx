import styled from "styled-components";

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;

  height: 100%;
  width: 100%;

  .menu-1,
  .menu-2 {
    display: none;

    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    height: 100%;

    list-style-type: none;
    color: white;
  }

  li {
    display: flex;
    align-items: center;
    gap: 5px;

    height: 100%;
    cursor: pointer;
    padding: 0 0.5rem;
    font-weight: 400;
  }

  span {
    vertical-align: text-top;
    top: 0;

    font-size: 10px;
  }

  li:hover {
    background-color: #4f89c7;
    color: white;
  }

  .menu-1 {
    @media (min-width: 960px) {
      display: flex;
    }
  }

  .menu-2 {
    @media (min-width: 1280px) {
      display: flex;
    }
  }
`;

export default NavigationWrapper;
