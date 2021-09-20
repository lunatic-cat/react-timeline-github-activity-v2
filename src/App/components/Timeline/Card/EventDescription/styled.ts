import { Space } from 'antd';
import styled from 'styled-components';

import { bigMobile, tablet } from 'consts/breakpoints';

export const BodyContainer = styled(Space)`
  margin: 0 16px;

  @media (max-width: ${tablet}) {
    margin: 0 12px;
  }

  @media (max-width: ${bigMobile}) {
    span {
      white-space: pre-line;
      text-align: justify;
      word-break: break-word;
    }
  }
`;
