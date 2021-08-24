import { parseGithubRepoInfo } from 'utils';

import { EventDescriptionType, GithubEvent } from './types';

const parseGithubEvent = (event: GithubEvent): EventDescriptionType | null => {
  switch (event.type) {
    case 'PushEvent': {
      const title = { ...parseGithubRepoInfo(event.repo), prefix: 'Pushed new commits to' };

      const body = event.payload.commits?.map((commit) => ({
        name: commit.sha.slice(0, 6),
        href: `${title.href}/commit/${commit.sha}`,
        msg: commit.message,
      })) || [];

      return { title, body };
    }
    case 'PublicEvent': {
      const title = { ...parseGithubRepoInfo(event.repo), prefix: 'Made his private repository public!' };

      return { title, body: [], goldEvent: true };
    }
    default:
      return null;
  }
};

export default parseGithubEvent;
