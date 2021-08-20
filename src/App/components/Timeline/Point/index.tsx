import { Typography } from 'antd';

import {
  PointContainer, Point, PointDescriptionContainer, PointGridContainer,
} from './styled';

type TimelinePointPropTypes = {
  dayOfTheWeek: string;
  date: string;
};

const TimelinePoint: React.FC<TimelinePointPropTypes> = ({ dayOfTheWeek, date }) => (
  <PointGridContainer>
    <PointContainer>
      <Point />
      <PointDescriptionContainer>
        <Typography.Text>{dayOfTheWeek}</Typography.Text>
        <Typography.Text>{date}</Typography.Text>
      </PointDescriptionContainer>
    </PointContainer>
  </PointGridContainer>
);

export default TimelinePoint;
