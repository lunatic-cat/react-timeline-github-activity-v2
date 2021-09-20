import { FC } from 'react';

import { EventDescriptionType } from 'utils/types';

import { Side } from '../types';
import {
  Author,
  AuthorName,
  AvatarIcon,
  CardContainer,
  HeaderContainer,
  BodyContainer,
  AuthorContainer,
} from './styled';
import EventDescription from './EventDescription';

type CardPropTypes = {
  side: Side;
  avatar: string;
  link: string;
  name: string;
  realName: string;
  events: EventDescriptionType[];
  animationName: string;
  isVisibleByDefault: boolean;
};

const CardComponent: FC<CardPropTypes> = ({
  side,
  avatar,
  link,
  name,
  realName,
  events,
  animationName,
  isVisibleByDefault,
}) => (
  <CardContainer
    side={side}
    animateIn={animationName}
    initiallyVisible={isVisibleByDefault}
    animateOnce
    offset={60}
    duration={0.75}
  >
    <HeaderContainer direction="horizontal" align="center" size="small">
      <AvatarIcon size={40} src={avatar} draggable={false} />
      <AuthorContainer>
        <Author href={link} target="_blank">
          {name}
        </Author>
        <AuthorName style={{ fontSize: 14, lineHeight: 1 }}>
          {realName}
        </AuthorName>
      </AuthorContainer>
    </HeaderContainer>
    <BodyContainer direction="vertical" size="middle">
      {events.map((event, i) => (
        <EventDescription event={event} key={i} />
      ))}
    </BodyContainer>
  </CardContainer>
);

export default CardComponent;
