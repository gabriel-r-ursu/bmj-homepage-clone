import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .category-and-date > *,
  .category {
    font-weight: 300;
    font-size: 12px;
  }

  .category:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default AppWrapper;
