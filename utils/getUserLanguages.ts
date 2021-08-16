import GitHubClient from "./GitHubClient";

export const getUserLanguagesCount = async (
  username: string
): Promise<{ [key: string]: number }> => {
  const client = new GitHubClient(process.env.NEXT_PUBLIC_API_TOKEN);
  const languageCount = {};
  try {
    const repos = await client.getUserRepos(username);
    if (repos.length === 0) {
      throw new Error("No repositories for this user");
    }
    for (const repo of repos) {
      const { language: dominantLanguage } = repo;
      if (dominantLanguage) {
        let currentCount =
          dominantLanguage in languageCount
            ? languageCount[dominantLanguage]
            : 0;
        currentCount++;
        languageCount[dominantLanguage] = currentCount;
      }
    }
    return languageCount;
  } catch (e) {
    console.log(e);
    throw new Error("Unable to get user repos");
  }
};

export const getUserFavouriteLanguage = async (username: string) => {
  if (!username) {
    throw new Error("getUserLanguages: Valid username must be provided");
  }
  try {
    const languagesCount = await getUserLanguagesCount(username);
    let max = 0;
    let favLang;
    for (const lang in languagesCount) {
      const langCount = languagesCount[lang];
      if (langCount > max) {
        max = langCount;
        favLang = lang;
      }
    }
    return favLang;
  } catch (e) {
    console.log("getUserFavLang", e);
    throw new Error("Unable to calculate favourite language");
  }
};
