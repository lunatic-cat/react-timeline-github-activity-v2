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

export const TimelinePointCardContainer = styled.div<{ side: 'left' | 'rigth' }>`
  position: relative;

  grid-row: 1;
  grid-column: ${(props) => (props.side === 'left' ? 1 : 3)};
  justify-self: ${(props) => (props.side === 'left' ? 'end' : 'start')};
  width: 100%;
  height: 150px;

  background-color: ${colors.dark.light};
  border-radius: 12px;

  &::before {
    position: absolute;
    top: 14px;

    right: ${(props) => (props.side === 'left' ? '-10px' : 'auto')};
    left: ${(props) => (props.side === 'left' ? 'auto' : '-10px')};

    width: 0;
    height: 0;

    border: 10px solid transparent;
    border-right: ${(props) => (props.side === 'left' ? 'none' : `10px solid ${colors.dark.light}`)};

    border-left: ${(props) => (props.side === 'left' ? `10px solid ${colors.dark.light}` : 'none')};

    content: "";
  }
`;