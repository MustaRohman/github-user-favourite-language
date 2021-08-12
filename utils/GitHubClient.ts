import { Octokit } from "@octokit/rest";

/**
 * Client used to interact with GitHub
 */
export class GitHubClient {
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
        "GitHubClient.searchUsers: Must provide search query parameter"
      );
    }
    try {
      const { data } = await this.client.search.users({ q: searchQuery });
      console.log("GHCLient", data);
      return data.items;
    } catch (e) {}
  }
}
