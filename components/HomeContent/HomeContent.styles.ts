import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export interface InputProps {
  error?: string;
  success?: string;
}

export const Input = styled.input<InputProps>`
  border: 3px solid
    ${(props) => (props.error ? "red" : props.success ? "green" : "black")};
`;
