import { GitHubClient } from "../../../utils/GitHubClient";

export default async function handler(req, res) {
  const { user } = req.query;

  try {
    const data = await new GitHubClient().searchUsers(user);
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
