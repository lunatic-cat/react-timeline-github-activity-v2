import { bigMobileNum, tabletNum } from './breakpoints';

export const isTwoColumns = (): boolean => window.screen.width <= tabletNum;

export const isBigMobile = (): boolean => window.screen.width <= bigMobileNum;

export const pointColumnWidth = {
  default: '150px',
  tablet: '20vw',
  mobile: '25vw',
};
