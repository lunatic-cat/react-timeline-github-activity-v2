import { createGlobalStyle } from 'styled-components';

import { bigMobile } from 'consts/breakpoints';
import colors from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 100%;

    background-color: ${colors.dark.base};

    @media (max-width: ${bigMobile}) {
      font-size: 70%;
    }
  }

  body {
    margin: 0;

    overflow-x: hidden;
    overflow-y: scroll;

    font-family: 'Hind Siliguri', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 18px;
  }

  ::-webkit-scrollbar-thumb {
    background: #012146;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 24px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #011a37;
    background-clip: padding-box;

    border: 4px solid transparent;
  }
`;
