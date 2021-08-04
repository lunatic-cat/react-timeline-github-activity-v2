import styled from 'styled-components';

import colors from 'utils/colors';

import { Side } from '../types';

export const CardContainer = styled.div<{ side: Side }>`
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
