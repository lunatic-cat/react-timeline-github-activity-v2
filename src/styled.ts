import { createGlobalStyle } from 'styled-components';

import colors from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    overflow-x: hidden;
    overflow-y: scroll;

    font-family: 'Hind Siliguri', sans-serif;

    background-color: ${colors.dark.base};
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
