import styled from 'styled-components';

import colors from 'utils/colors';

export const Container = styled.div`
  position: relative;

  margin: 64px 0;

  > div:not(:last-child) {
    margin-bottom: 64px;
  }
`;

export const VerticalLine = styled.span`
  position: absolute;
  top: 0;
  left: calc(50% - 2px);

  width: 4px;
  height: calc(100% + 64px);

  background-color: ${colors.blue.base};
  border: 1px solid ${colors.blue.base};
`;

export const TimelineContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 150px 1fr;
`;

export const TimelinePointGridContainer = styled.div`
  grid-column: 2;
`;

export const TimelinePointContainer = styled.div<{ first: boolean, last: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;

  background-color: ${colors.dark.base};

  span {
    margin-top: 4px;

    font-size: 18px;
    line-height: 1;
  }

  span:first-child {
    margin-top: 8px;
  }
`;

export const TimelinePoint = styled.div`
  width: 32px;
  height: 32px;

  background-color: ${colors.blue.dark};
  border-radius: 50%;
`;
