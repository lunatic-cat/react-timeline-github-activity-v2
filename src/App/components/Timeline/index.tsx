import getEventsByName from 'store/selectors/eventsByDate';
import { useTypedSelector } from 'utils/hooks';

import Card from './Card';
import TimelinePoint from './Point';
import {
  Container,
  TimelineContainer,
  VerticalLine,
} from './styled';

const TimelineComponent: React.FC = () => {
  const events = useTypedSelector(getEventsByName);

  console.log(events);

  return (
    <Container>
      <VerticalLine />

      <TimelineContainer>
        <TimelinePoint dayOfTheWeek="Tuesday" date="May 21th 2021" />
        <Card side="right" />
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePoint dayOfTheWeek="Tuesday" date="May 15th 2021" />
        <Card side="left" />
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePoint dayOfTheWeek="Tuesday" date="May 13th 2021" />
        <Card side="right" />
      </TimelineContainer>

      <TimelineContainer>
        <TimelinePoint dayOfTheWeek="Tuesday" date="May 9th 2021" />
        <Card side="left" />
      </TimelineContainer>
    </Container>
  );
};

export default TimelineComponent;
