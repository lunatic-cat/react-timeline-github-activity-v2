import { createGlobalStyle } from 'styled-components';

import colors from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    background-color: ${colors.dark.base};
  }
`;
