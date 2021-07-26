import { createGlobalStyle } from 'styled-components';

import colors from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    font-family: 'Hind Siliguri', sans-serif;

    background-color: ${colors.dark.base};
  }
`;
