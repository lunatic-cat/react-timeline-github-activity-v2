import styled from 'styled-components';

import { bigMobile, tablet } from 'consts/breakpoints';
import colors from 'utils/colors';
import { pointColumnWidth } from 'consts';

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

  &::after {
    position: absolute;
    bottom: -2px;
    left: -2px;

    width: 8px;
    height: 100px;

    background: linear-gradient(to top, ${colors.dark.base} 15%, transparent);

    content: "";
  }

  @media (max-width: ${tablet}) {
    left: calc(${pointColumnWidth.tablet} / 2 - 2px);
  }

  @media (max-width: ${bigMobile}) {
    left: calc(${pointColumnWidth.mobile} / 2 - 2px);
  }
`;

export const TimelineContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr ${pointColumnWidth.default} 1fr;

  @media (max-width: ${tablet}) {
    grid-template-columns: ${pointColumnWidth.tablet} calc(100vw - ${pointColumnWidth.tablet});
  }

  @media (max-width: ${tablet}) {
    grid-template-columns: ${pointColumnWidth.tablet} calc(100vw - ${pointColumnWidth.tablet});
  }

  @media (max-width: ${bigMobile}) {
    grid-template-columns: ${pointColumnWidth.mobile} calc(100vw - ${pointColumnWidth.mobile});
  }
`;
