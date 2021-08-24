import { Space, Typography } from 'antd';

import { EventDescriptionType } from 'utils/types';

import { BodyContainer, BodyMessage } from './styled';

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
          fontSize: 16,
          lineHeight: '1',
          background: goldEvent
            ? 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) text'
            : 'transparent',
          color: goldEvent ? 'transparent' : 'white',
        }}
      >
        {title.prefix}
        {' '}
        <Typography.Link href={title.href} style={{ fontSize: 16, lineHeight: 1 }}>
          {title.name}
        </Typography.Link>
      </Typography.Text>
    </Space>

    {body.map(({ name, href, msg }, index) => (
      <BodyContainer direction="horizontal" align="start" key={index}>
        <Typography.Link href={href}>{name}</Typography.Link>
        <BodyMessage
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: 'show',
          }}
        >
          {msg}
        </BodyMessage>
      </BodyContainer>
    ))}
  </Space>
);

export default EventDescription;
