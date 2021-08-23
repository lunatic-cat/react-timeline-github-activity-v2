import { FC } from 'react';

import { Typography } from 'antd';

import { GithubEvent } from 'utils/types';
import { parseGithubEvent } from 'utils';

import { Side } from '../types';
import {
  Author,
  AvatarIcon,
  CardContainer,
  HeaderContainer,
  StoryContainer,
} from './styled';

type CardPropTypes = {
  side: Side;
  avatar: string;
  link: string;
  name: string;
  realName: string;
  events: GithubEvent[];
};

const CardComponent: FC<CardPropTypes> = ({
  side, avatar, link, name, realName, events,
}) => {
  events.forEach((event) => console.log(parseGithubEvent(event)));

  return (
    <CardContainer side={side}>
      <HeaderContainer direction="horizontal" align="center" size="small">
        <AvatarIcon size={40} src={avatar} draggable={false} />
        <Author href={link} target="_blank">
          {name}
        </Author>
        <Typography.Text style={{ fontSize: 14 }}>
          aka
          {' '}
          {realName}
        </Typography.Text>
      </HeaderContainer>
      <StoryContainer direction="vertical">
        <Typography.Text style={{ fontSize: 16 }}>
          There are some new decent commits!
        </Typography.Text>
        <Typography.Text style={{ fontSize: 16 }}>
          And also several new PR&apos;s!
        </Typography.Text>
      </StoryContainer>
    </CardContainer>
  );
};

export default CardComponent;
