import styled from 'styled-components';

import { laptop, tablet } from 'consts/breakpoints';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 65vw;
  min-height: 100vh;
  margin: auto;

  @media (max-width: ${laptop}) {
    width: 85vw;
  }

  @media (max-width: ${tablet}) {
    width: 100vw;
  }
`;
