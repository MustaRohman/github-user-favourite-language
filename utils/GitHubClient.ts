import { Octokit } from "@octokit/rest";

/**
 * Client used to interact with GitHub
 */
export default class GitHubClient {
  usertoken = "";
  client: Octokit;

  constructor(userToken = "", baseUrl = "https://api.github.com") {
    this.usertoken = userToken;
    this.client = new Octokit({
      auth: this.usertoken,
      timeZone: "",
      baseUrl,
    });
  }

  // Add return type
  // Adapter pattern
  async searchUsers(searchQuery) {
    if (!searchQuery) {
      throw new Error(
        "GitHubClient.searchUsers: Must provide search parameter"
      );
    }
    try {
      const { data } = await this.client.search.users({ q: searchQuery });
      return data.items;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserRepos(username: string) {
    if (!username) {
      throw new Error(
        "GitHubClient.getUserRepos: Must provide username parameter"
      );
    }
    try {
      const { data } = await this.client.repos.listForUser({
        type: "owner",
        username,
      });
      console.log("getUserRepos");
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
