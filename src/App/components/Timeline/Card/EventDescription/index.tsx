import { Space, Typography } from 'antd';

import { EventDescriptionType } from 'utils/types';

import { BodyContainer } from './styled';

type EventDescriptionPropTypes = {
  event: EventDescriptionType;
};

const EventDescription: React.FC<EventDescriptionPropTypes> = ({
  event: { body, title, goldEvent },
}) => (
  <Space direction="vertical">
    <Space direction="horizontal">
      <Typography.Text
        style={{
          lineHeight: '1',
          background: goldEvent
            ? 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) text'
            : 'transparent',
          color: goldEvent ? 'transparent' : 'white',
        }}
      >
        {title.prefix}
        {' '}
        {title.href ? (
          <Typography.Link href={title.href} style={{ lineHeight: 1 }}>
            {title.name}
          </Typography.Link>
        ) : (
          <Typography.Text style={{ lineHeight: 1 }}>{title.name}</Typography.Text>
        )}
      </Typography.Text>
    </Space>

    {body.map(({ name, href, msg }, index) => (
      <BodyContainer direction="horizontal" align="start" key={index}>
        <span>
          {href ? (
            <Typography.Link href={href}>{name}</Typography.Link>
          ) : (
            <Typography.Text>{name}</Typography.Text>
          )}
          {' '}
          <Typography.Text>{msg.replace(/[a-f0-9]{40}/, '')}</Typography.Text>
        </span>
      </BodyContainer>
    ))}
  </Space>
);

export default EventDescription;
