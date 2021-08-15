import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GitHubClient from "../../utils/GitHubClient";
import reposMock from "../../__mocks__/ReposMock";
import HomeContent from "./HomeContent";

describe("HomeContent", () => {
  beforeEach(() => {
    jest
      .spyOn(GitHubClient.prototype, "getUserRepos")
      .mockReturnValue(new Promise((resolve) => resolve(reposMock)));
  });
  it("submitting valid username should result in favourite language rendering", async () => {
    // Arrange
    render(<HomeContent />);
    const inputValue = "mustarohman";
    const userNameInput = screen.getByLabelText("GitHub Username:");
    const submitButton = screen.getByRole("button", {
      name: "Load user languages",
    });

    // Act
    userEvent.type(userNameInput, inputValue);
    userEvent.click(submitButton);

    // Assert
    await waitFor(() => screen.getByText("Favourite language is JavaScript"));
  });
  // Error: failed username lookup should result in user error
  // Error: Failed repo lookup should result in failed repo lookup
});
