import { Typography } from 'antd';

import getEventsByName from 'store/selectors/eventsByDate';
import { useTypedSelector } from 'utils/hooks';

import Card from './Card';
import {
  Container,
  TimelineContainer,
  TimelinePoint,
  TimelinePointContainer,
  TimelinePointGridContainer,
  VerticalLine,
} from './styled';

const TimelineComponent: React.FC = () => {
  const events = useTypedSelector(getEventsByName);

  console.log(events);

  return (
    <Container>
      <VerticalLine />
      <TimelineContainer>
        <TimelinePointGridContainer>
          <TimelinePointContainer first last={false}>
            <TimelinePoint />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography.Text>Tuesday</Typography.Text>
              <Typography.Text>May 21th 2021</Typography.Text>
            </div>
          </TimelinePointContainer>
        </TimelinePointGridContainer>
        <Card side="right">{' '}</Card>
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePointGridContainer>
          <TimelinePointContainer first={false} last={false}>
            <TimelinePoint />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography.Text>Tuesday</Typography.Text>
              <Typography.Text>May 15th 2021</Typography.Text>
            </div>
          </TimelinePointContainer>
        </TimelinePointGridContainer>
        <Card side="left">{' '}</Card>
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePointGridContainer>
          <TimelinePointContainer first={false} last={false}>
            <TimelinePoint />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography.Text>Tuesday</Typography.Text>
              <Typography.Text>May 13th 2021</Typography.Text>
            </div>
          </TimelinePointContainer>
        </TimelinePointGridContainer>
        <Card side="right">{' '}</Card>
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePointGridContainer>
          <TimelinePointContainer first={false} last>
            <TimelinePoint />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography.Text>Tuesday</Typography.Text>
              <Typography.Text>May 9th 2021</Typography.Text>
            </div>
          </TimelinePointContainer>
        </TimelinePointGridContainer>
        <Card side="left">{' '}</Card>
      </TimelineContainer>
    </Container>
  );
};

export default TimelineComponent;
