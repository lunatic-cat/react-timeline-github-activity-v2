import keyBy from 'lodash/keyBy';
import compact from 'lodash/compact';
import isEmpty from 'lodash/isEmpty';

import getEventsByName from 'store/selectors/eventsByDate';
import { formatDate, getTimelinePointInfoByDate, groupSameEvents } from 'utils';
import { useBreakpoint, useTypedSelector } from 'utils/hooks';
import parseGithubEvent from 'utils/parseGithubEvent';
import { isBigMobile, isTwoColumns } from 'consts';

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

  useBreakpoint();

  let index = 1;

  if (!eventsByDate) return <Loader />;

  return (
    <Container>
      <VerticalLine />

      {eventsByDate.map((eventsByAuthors) => {
        const authors = Object.keys(eventsByAuthors);

        return authors.map((author, i) => {
          const side = index % 2 === 0 && !isTwoColumns() ? 'left' : 'right';
          let animation = side === 'left' ? 'fadeInLeft' : 'fadeInRight';
          const user = users[author];
          const date = formatDate(eventsByAuthors[author][0].createdAt);
          const timelinePointInfo = getTimelinePointInfoByDate(date, isBigMobile() ? 'MMM do' : 'MMM do yyyy');
          const events = compact(eventsByAuthors[author].map((event) => parseGithubEvent(event)));

          if (isEmpty(events)) return null;

          if (isTwoColumns()) animation = '';

          index += 1;
          const groupedEvents = groupSameEvents(events);

          return (
            <TimelineContainer key={i}>
              <TimelinePoint
                dayOfTheWeek={!isBigMobile() ? timelinePointInfo.dayOfTheWeek : ''}
                date={timelinePointInfo.date}
              />
              <Card
                side={side}
                avatar={user.avatarUrl}
                link={user.htmlUrl}
                name={user.login}
                realName={user.name}
                events={groupedEvents}
                animationName={animation}
                isVisibleByDefault={isTwoColumns()}
              />
            </TimelineContainer>
          );
        });
      })}
    </Container>
  );
};

export default TimelineComponent;
