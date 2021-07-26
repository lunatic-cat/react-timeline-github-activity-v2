// import { HistoryType } from 'utils/types';

import { Typography } from 'antd';

import {
  Container,
  TimelineContainer,
  TimelinePoint,
  TimelinePointCardContainer,
  TimelinePointContainer,
  TimelinePointGridContainer,
  VerticalLine,
} from './styled';

// type PropTypes = {
//   history: HistoryType[],
// };

const TimelineComponent: React.FC = () => (
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
      <TimelinePointCardContainer side="rigth">{' '}</TimelinePointCardContainer>
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
      <TimelinePointCardContainer side="left">{' '}</TimelinePointCardContainer>
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
      <TimelinePointCardContainer side="rigth">{' '}</TimelinePointCardContainer>
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
      <TimelinePointCardContainer side="left">{' '}</TimelinePointCardContainer>
    </TimelineContainer>
  </Container>
);

export default TimelineComponent;
