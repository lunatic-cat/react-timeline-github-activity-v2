import { FC } from 'react';

import { Typography } from 'antd';

import { EventDescriptionType } from 'utils/types';

import { Side } from '../types';
import {
  Author,
  AvatarIcon,
  CardContainer,
  HeaderContainer,
  BodyContainer,
} from './styled';
import EventDescription from './EventDescription';

type CardPropTypes = {
  side: Side;
  avatar: string;
  link: string;
  name: string;
  realName: string;
  events: EventDescriptionType[];
};

const CardComponent: FC<CardPropTypes> = ({
  side, avatar, link, name, realName, events,
}) => (
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
    <BodyContainer direction="vertical" size="large">
      {events.map((event, i) => (
        <EventDescription event={event} key={i} />
      ))}
    </BodyContainer>
  </CardContainer>
);

export default CardComponent;
