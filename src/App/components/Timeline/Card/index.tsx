import { FC } from 'react';

import random from 'lodash/random';
import { Typography } from 'antd';

import { Side } from '../types';
import {
  Author,
  AvatarIcon, CardContainer, HeaderContainer, StoryContainer,
} from './styled';

const authors = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/122018?',
    name: 'razum2um',
    realName: 'Vlad Bokov',
    link: 'https://github.com/razum2um',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/18646440?',
    name: 'ByJIKaHkaz',
    realName: 'Vladimir',
    link: 'https://github.com/ByJIKaHkaz',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/46472464?',
    name: 'Afgan0r',
    realName: 'Alexandr Pavlov',
    link: 'https://github.com/Afgan0r',
  },
];

const avatars = [
  'https://avatars.githubusercontent.com/u/122018?',
  'https://avatars.githubusercontent.com/u/18646440?',
  'https://avatars.githubusercontent.com/u/46472464?',
];

type CardPropTypes = {
  side: Side;
};

const CardComponent: FC<CardPropTypes> = ({ side }) => {
  const author = authors[random(avatars.length - 1)];

  return (
    <CardContainer side={side}>
      <HeaderContainer direction="horizontal" align="center" size="small">
        <AvatarIcon size={40} src={author.avatar} draggable={false} />
        <Author href={author.link} target="_blank">
          {author.name}
        </Author>
        <Typography.Text style={{ fontSize: 14 }}>
          aka
          {' '}
          {author.realName}
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
