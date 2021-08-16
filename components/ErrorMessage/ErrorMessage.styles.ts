import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px 0;
  border: 1px solid red;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 400px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  padding: 3px 7px;
  background-color: red;
  color: white;
`;

export const Content = styled.div`
  padding: 3px 7px;
`;
