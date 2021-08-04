import { Space, Avatar, Typography } from 'antd';
import styled from 'styled-components';

import colors from 'utils/colors';

import { Side } from '../types';

export const CardContainer = styled.div<{ side: Side }>`
  position: relative;

  display: flex;
  flex-direction: column;

  grid-row: 1;
  grid-column: ${(props) => (props.side === 'left' ? 1 : 3)};
  justify-self: ${(props) => (props.side === 'left' ? 'end' : 'start')};
  width: 100%;

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

export const HeaderContainer = styled(Space)`
  position: sticky;
  top: 0;

  gap: 6px;
  padding: 12px;

  a {
    color: ${colors.blue.base};
    font-size: 18px;
    text-decoration: underline;
  }

  a:hover {
    color: ${colors.blue.dark};
    text-decoration: underline;
  }
`;

export const AvatarIcon = styled(Avatar)`
  margin-right: 12px;
`;

export const Author = styled(Typography.Link)``;

export const StoryContainer = styled(Space)`
  margin: 12px 24px 24px 24px;
  padding: 12px;

  border-radius: 4px;
  box-shadow: 0 4px 8px 4px #011125;
`;
