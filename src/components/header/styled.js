import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2rem 0;
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    padding: 0.5rem;
    font-weight: 500;
  }
  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
