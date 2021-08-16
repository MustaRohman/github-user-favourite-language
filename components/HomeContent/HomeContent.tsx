import { FormEvent, useState } from "react";
import { getUserFavouriteLanguage } from "../../utils/getUserLanguages";
import ErrorMessage from "../ErrorMessage";
import { Form, Input, InputWrapper, Main, Wrapper } from "./HomeContent.styles";

const HomeContent = () => {
  const [error, setError] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [favLang, setFavLang] = useState("");

  async function onClickHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!usernameInput) {
        setError("Please enter username into input field");
        setFavLang("");
        return;
      }
      setIsLoading(true);
      const data = await getUserFavouriteLanguage(usernameInput);
      setFavLang(data);
      setError("");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve favourite language");
      setFavLang("");
    }
    setIsLoading(false);
  }
  return (
    <Wrapper>
      <Main>
        {error && <ErrorMessage message={error} />}
        <Form onSubmit={(e) => onClickHandler(e)}>
          <InputWrapper>
            <label id="username-input-label">GitHub Username:</label>
            <Input
              aria-labelledby="username-input-label"
              id="username-input"
              name="username-input"
              placeholder="Enter Username Here..."
              type="text"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              error={error}
              success={favLang}
            />
          </InputWrapper>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Load user languages"}
          </button>
        </Form>
        {isLoading && <p>Loading...</p>}
        {favLang && <p>Favourite language is {favLang}</p>}
      </Main>
    </Wrapper>
  );
};

export default HomeContent;
