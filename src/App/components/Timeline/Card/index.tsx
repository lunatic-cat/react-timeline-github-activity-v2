import { FC } from 'react';

import { Side } from '../types';
import { CardContainer } from './styled';

type CardPropTypes = {
  side: Side;
};

const CardComponent: FC<CardPropTypes> = ({ side }) => (
  <CardContainer side={side}>
    {' '}
  </CardContainer>
);

export default CardComponent;
