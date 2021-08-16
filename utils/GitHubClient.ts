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
