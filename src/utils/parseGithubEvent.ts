import { parseGithubRepoInfo } from 'utils';

import { EventDescriptionType, GithubEvent } from './types';

const parseGithubEvent = (event: GithubEvent): EventDescriptionType | null => {
  switch (event.type) {
    case 'PushEvent': {
      const title = { ...parseGithubRepoInfo(event.repo), prefix: 'Pushed a new commit to' };

      const body = event.payload.commits?.map((commit) => ({
        name: commit.sha.slice(0, 6),
        href: `${title.href}/commit/${commit.sha}`,
        msg: commit.message,
      })) || [];

      return { title, body };
    }
    case 'PublicEvent': {
      const title = {
        ...parseGithubRepoInfo(event.repo),
        prefix: 'Made his private repository public!',
      };

      return { title, body: [], goldEvent: true };
    }
    case 'CreateEvent': {
      const createEventType = event.payload.refType;

      if (createEventType === 'tag') return null;

      const title = {
        ...parseGithubRepoInfo(event.repo),
        prefix: createEventType === 'branch'
          ? 'Created a new branch in'
          : 'Created a new repository',
      };

      const body = createEventType === 'branch' ? [{
        name: `${event.payload.ref || ''}`,
        href: `${title.href}/tree/${event.payload.ref || ''}`,
        msg: '',
      }] : [];

      return { title, body };
    }
    case 'DeleteEvent': {
      const deleteEventType = event.payload.refType;

      if (deleteEventType === 'tag') return null;

      const title = {
        ...parseGithubRepoInfo(event.repo),
        prefix: deleteEventType === 'branch'
          ? 'Deleted a branch in'
          : 'Deleted the repository',
      };

      const body = deleteEventType === 'branch' ? [{
        name: `${event.payload.ref || ''}`,
        href: '',
        msg: '',
      }] : [];

      return { title, body };
    }
    default:
      return null;
  }
};

export default parseGithubEvent;
