import { useContext } from "react";
import { GithubContext } from "../providers/github-providers";

function useGithub() {
  const { gitHubSate } = useContext(GithubContext);

  return { gitHubSate };
}

export default useGithub;
