// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Octokit } from "@octokit/rest";
import { GitHubClient } from "../../../utils/GitHubClient";

export default async function handler(req, res) {
  const octokit = new Octokit({
    auth: "",
    timeZone: "",
    baseUrl: "https://api.github.com",
  });

  const { search } = req.query;
  console.log("search", search);

  try {
    // const ret = await octokit.search.users({ q: search });
    // console.log(ret.data);
    const data = await new GitHubClient().searchUsers(search);
    res.status(200).json({ data });
  } catch (e) {
    console.log("ERRROR", e);
    if (e.status === 404) {
      res
        .status(400)
        .json({ data: null, error: "No github profile with that username" });
    }
  }
}
