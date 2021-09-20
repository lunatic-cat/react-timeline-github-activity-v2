import { Space } from 'antd';
import styled from 'styled-components';

export const Container = styled(Space)`
  margin-top: 48px;

  h1 {

    font-weight: bold;
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    color: lightgrey;
    font-weight: 300;
    font-size: 2rem;
    font-family: 'Hind Siliguri', sans-serif;
    letter-spacing: 4px;
  }

  h1,
  h2 {
    margin: 0;

    text-align: center;
  }
`;
