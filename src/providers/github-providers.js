import React, { createContext, useState } from "react";

export const GitHubContext = createContext({
  user: {},
  repositories: [],
  starred: []
});

function GithubProvider({ children }) {
  const [gitHubSate, setGitHubSate] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0
    },
    repositories: [],
    starred: []
  });

  const contextValue = {
    gitHubSate
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
}

export default GithubProvider;
