import { Content, Header, Wrapper } from "./ErrorMessage.styles";

interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return (
    <Wrapper>
      <Header>Error</Header>
      <Content>{message}</Content>
    </Wrapper>
  );
};

export default ErrorMessage;
