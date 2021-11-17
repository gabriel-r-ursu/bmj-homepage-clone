import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: none;
  padding: 0 2rem;

  .wrapper {
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 600px) {
    display: block;
    height: 35px;
    width: 100%;
    background-color: #e5e6e6;

    font-size: 14px;

    .menubar {
      display: flex;
      gap: 1.5rem;

      color: #235b9a;
    }

    span {
      font-weight: 400;
    }

    span:hover {
      cursor: pointer;
      color: #4f89c7;
      text-decoration: underline;
    }
  }
`;

export default HeaderWrapper;
