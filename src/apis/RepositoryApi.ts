import { SearchResponseDto } from "../model/Search";
import { octokit } from "../auth/token";

export const getRepositories = async (
  searchKeyword: string
): Promise<SearchResponseDto> => {
  const { data } = await octokit.request("GET /search/repositories", {
    q: searchKeyword,
  });
  return data as SearchResponseDto;
};
