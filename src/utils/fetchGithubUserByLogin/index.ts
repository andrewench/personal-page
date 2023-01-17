import { IGithubApiResponse } from '@/types';

export const fetchGithubUserByLogin = async (
  login: string
): Promise<IGithubApiResponse> => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  const data: Awaited<Promise<IGithubApiResponse>> = await response.json();

  return data;
};
