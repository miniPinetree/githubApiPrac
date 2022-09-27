import { octokit } from "../auth/token";
import { Issue } from "../model/Issue";

export const getIssues = async (
  owner: string,
  repo: string
): Promise<Issue[]> => {
  const { data } = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
    owner,
    repo,
  });
  return data as Issue[];
};
