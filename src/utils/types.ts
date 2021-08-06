export type ObjectWithIds<KeyType extends string | number | symbol, ValueType> = {
  byIds: Record<KeyType, ValueType>;
  ids: KeyType[];
};

export type HistoryType = {
  key: string;
  author: string;
  text: string;
  repo: {
    name: string;
    link: string;
  };
};

// https://docs.github.com/en/rest/reference/teams#list-team-members
export type GithubTeamMember = {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
};

// https://docs.github.com/en/rest/reference/users#get-a-user
export type GithubUser = {
  name: string;
};

// https://docs.github.com/en/rest/reference/activity#list-events-for-the-authenticated-user
export type GithubEvent = {
  type: GithubEventTypes;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: GithubCommit[];
    comment?: GithubComment;
    forkee?: GithubRepository;
    release?: GithubRelease;
    action?: 'created' | 'edited' | 'deleted' | 'opened' | 'closed' | 'reopened' | 'published';

    // create and delete events
    ref?: string;
    refType?: 'repository' | 'branch' | 'tag';

    // issue and PR events
    changes?: {
      title?: {
        from: string;
      };
      body?: {
        from: string;
      };
    };

    // issue specific events
    issue?: GithubIssueAndPR;

    // PR specific events
    number?: number;
    pullRequest?: GithubIssueAndPR;
  };
  createdAt: string;
};

// github event types
// https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types

export type GithubEventTypes =
  | 'CommitCommentEvent'
  | 'CreateEvent'
  | 'DeleteEvent'
  | 'ForkEvent'
  | 'IssueCommentEvent'
  | 'IssueEvent'
  | 'PublicEvent'
  | 'PullRequestEvent'
  | 'PullRequestReviewEvent'
  | 'PullRequestReviewCommentEvent'
  | 'PushEvent'
  | 'ReleaseEvent';

export type GithubCommit = {
  sha: string;
  message: string;
  url: string;
};

export type GithubRepository = {
  fullName: string;
  htmlUrl: string;
};

export type GithubIssueAndPR = {
  htmlUrl: string;
  title: string;
  number: number;
};

export type GithubComment = {
  htmlUrl: string;
  body: string;
};

export type GithubReview = {
  htmlUrl: string;
  body: string;
};

export type GithubRelease = {
  htmlUrl: string;
  name: string;
  body: string;
};
