import keyBy from 'lodash/keyBy';
import compact from 'lodash/compact';
import isEmpty from 'lodash/isEmpty';

import getEventsByName from 'store/selectors/eventsByDate';
import { formatDate, getTimelinePointInfoByDate, parseGithubEvent } from 'utils';
import { useTypedSelector } from 'utils/hooks';

import Loader from '../Loader';
import Card from './Card';
import TimelinePoint from './Point';
import {
  Container,
  TimelineContainer,
  VerticalLine,
} from './styled';

const TimelineComponent: React.FC = () => {
  const eventsByDate = useTypedSelector(getEventsByName);
  const users = keyBy(useTypedSelector((state) => state.users), 'login');

  let index = 1;

  if (!eventsByDate) return <Loader />;

  return (
    <Container>
      <VerticalLine />

      {eventsByDate.map((eventsByAuthors) => {
        const authors = Object.keys(eventsByAuthors);

        return authors.map((author, i) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const user = users[author];
          const date = formatDate(eventsByAuthors[author][0].createdAt);
          const timelinePointInfo = getTimelinePointInfoByDate(date);
          const events = compact(eventsByAuthors[author].map((event) => parseGithubEvent(event)));

          if (isEmpty(events)) return null;

          index += 1;

          return (
            <TimelineContainer key={i}>
              <TimelinePoint
                dayOfTheWeek={timelinePointInfo.dayOfTheWeek}
                date={timelinePointInfo.date}
              />
              <Card
                side={side}
                avatar={user.avatarUrl}
                link={user.htmlUrl}
                name={user.login}
                realName={user.name}
                events={events}
              />
            </TimelineContainer>
          );
        });
      })}
    </Container>
  );
};

export default TimelineComponent;
