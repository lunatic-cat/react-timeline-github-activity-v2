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

  background-color: ${colors.dark.lightest};
  border-radius: 12px;

  &::before {
    position: absolute;
    top: 14px;

    right: ${(props) => (props.side === 'left' ? '-10px' : 'auto')};
    left: ${(props) => (props.side === 'left' ? 'auto' : '-10px')};

    width: 0;
    height: 0;

    border: 10px solid transparent;
    border-right: ${(props) => (props.side === 'left' ? 'none' : `10px solid ${colors.dark.lightest}`)};

    border-left: ${(props) => (props.side === 'left' ? `10px solid ${colors.dark.lightest}` : 'none')};

    content: "";
  }
`;

export const HeaderContainer = styled(Space)`
  top: 0;

  gap: 4px !important;
  padding: 12px;

  background-color: ${colors.dark.lightest};
  border-bottom: 1px solid ${colors.dark.base};
  border-radius: 12px 12px 0 0;

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
  margin-right: 8px;
`;

export const Author = styled(Typography.Link)``;

export const BodyContainer = styled(Space)`
  padding: 24px 32px;

  background-color: ${colors.dark.light};
  border-radius: 0 0 12px 12px;
`;

export const EventDescriptonContainer = styled(Space)``;

export const EventDescriptonTitle = styled(Typography.Link)``;

export const EventDescriptonBodyContainer = styled(Space)`
  margin: 0 16px;
`;

export const EventDescriptonBodyTitle = styled(Typography.Link)``;

export const EventDescriptonBodyMessage = styled(Typography.Paragraph)`
  margin: 0 !important;
`;
