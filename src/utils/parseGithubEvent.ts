import { parseGithubRepoInfo } from 'utils';

import { EventDescriptionType, GithubEvent } from './types';

const parseGithubEvent = (event: GithubEvent): EventDescriptionType | null => {
  switch (event.type) {
    case 'CommitCommentEvent': {
      const title = { ...parseGithubRepoInfo(event.repo), prefix: 'Left a comment under the commit in' };
      const body = event.payload.comment && event.payload.comment.commitId ? [{
        name: event.payload.comment.commitId.slice(0, 6) || '',
        href: event.payload.comment.htmlUrl || '',
        msg: event.payload.comment.body || '',
      }] : [];

      return { title, body };
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

      return { title, body: [] }; // goldEvent: true
    }
    default:
      return null;
  }
};

export default parseGithubEvent;
