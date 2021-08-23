import { FC } from 'react';

import { Space, Typography } from 'antd';
import compact from 'lodash/compact';

import { GithubEvent } from 'utils/types';
import { parseGithubEvent } from 'utils';

import { Side } from '../types';
import {
  Author,
  AvatarIcon,
  CardContainer,
  HeaderContainer,
  BodyContainer,
  EventDescriptonContainer,
  EventDescriptonTitle,
  EventDescriptonBodyContainer,
  EventDescriptonBodyTitle,
  EventDescriptonBodyMessage,
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
  const parsedGithubEvents = compact(events.map((event) => parseGithubEvent(event)));

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
      <BodyContainer direction="vertical" size="large">
        {parsedGithubEvents.map(({ title, body }, i) => (
          <EventDescriptonContainer direction="vertical" key={i}>
            <Space direction="horizontal">
              <Typography.Text style={{ fontSize: 16, lineHeight: '1' }}>
                {title.prefix}
                {' '}
                <EventDescriptonTitle href={title.href} style={{ fontSize: 16, lineHeight: 1 }}>
                  {title.name}
                </EventDescriptonTitle>
              </Typography.Text>
            </Space>

            {body.map((smth, index) => (
              <EventDescriptonBodyContainer direction="horizontal" align="start" key={index}>
                <EventDescriptonBodyTitle href={smth.href}>
                  {smth.name}
                </EventDescriptonBodyTitle>
                <EventDescriptonBodyMessage ellipsis={{
                  rows: 3, expandable: true, symbol: 'show',
                }}
                >
                  {smth.msg}
                </EventDescriptonBodyMessage>
              </EventDescriptonBodyContainer>
            ))}

          </EventDescriptonContainer>
        ))}
      </BodyContainer>
    </CardContainer>
  );
};

export default CardComponent;
