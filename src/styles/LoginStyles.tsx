import styled from "styled-components";

const LoginWrapper = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 35px;
    width: 100%;
    padding: 0 4rem;
    background-color: #e5e6e6;

    font-size: 14px;

    .menubar {
      display: flex;
      gap: 1.5rem;

      color: #235b9a;
    }

    span:hover {
      cursor: pointer;
      color: #4f89c7;
      text-decoration: underline;
    }
  }
`;

export default LoginWrapper;
