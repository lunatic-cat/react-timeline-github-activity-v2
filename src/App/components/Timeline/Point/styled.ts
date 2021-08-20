import styled from 'styled-components';

import colors from 'utils/colors';

export const PointGridContainer = styled.div`
  grid-column: 2;
`;

export const PointContainer = styled.div`
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

export const Point = styled.div`
  width: 32px;
  height: 32px;

  background-color: ${colors.blue.dark};
  border-radius: 50%;
`;

export const PointDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
