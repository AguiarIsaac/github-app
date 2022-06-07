import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background: #302f3d;
  padding: 2rem 0;
  border-radius: 12px;
  box-shadow: 1px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;

export const WrapperInfoUser = styled.div`
  h1 {
  }
  h3 {
  }
  h4 {
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  h3 {
  }
  a {
  }
`;

export const WrapperImage = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
`;
