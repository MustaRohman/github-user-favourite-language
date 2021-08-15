import {
  getUserFavouriteLanguage,
  getUserLanguagesCount,
} from "./getUserLanguages";
import GitHubClient from "./GitHubClient";
import reposMock from "../__mocks__/ReposMock";

describe("getUserLanguages", () => {
  beforeEach(() => {
    jest
      .spyOn(GitHubClient.prototype, "getUserRepos")
      .mockReturnValue(new Promise((resolve) => resolve(reposMock)));
  });

  it("getUserLanguagesCount: Should return object with correct totals of for primary languages", async () => {
    // Act
    const totals = await getUserLanguagesCount("mustarohman");
    // Assert
    expect(totals["TypeScript"]).toBe(4);
    expect(totals["JavaScript"]).toBe(13);
    expect(totals["Java"]).toBe(9);
  });

  it("getUserLanguagesCount: Should throw error if no repos retrieved", async () => {
    // Arrange
    jest
      .spyOn(GitHubClient.prototype, "getUserRepos")
      .mockReturnValue(new Promise((resolve) => resolve([])));
    // Act/Assert
    await expect(getUserLanguagesCount("mustarohman")).rejects.toThrow(
      "Unable to get user repos"
    );
  });

  it("getUserFavouriteLanguage: Should throw exception if valid username param is not provided", async () => {
    // Arrange
    const param = "";
    // Act/Assert
    await expect(getUserFavouriteLanguage(param)).rejects.toThrow(
      Error("getUserLanguages: Valid username must be provided")
    );
  });

  it("getUserFavouriteLanguage: Should return language with most occurences as primary language across user repos", async () => {
    // Act
    const data = await getUserFavouriteLanguage("mustarohman");
    // Assert
    expect(data).toEqual("JavaScript");
  });
});
