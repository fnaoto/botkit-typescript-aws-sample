import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const GitHubListTags = async (owner: string, repo: string, per_page: number) => {
  return await octokit
    .paginate('GET /repos/:owner/:repo/tags', {
      owner: owner,
      repo: repo,
      per_page: per_page,
    });
};

export {
  GitHubListTags,
}
