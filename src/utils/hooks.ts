import { useEffect, useState } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import {
  laptopNum,
  tabletNum,
  bigMobileNum,
  mobileNum,
} from 'consts/breakpoints';
import type { RootState, AppDispatch } from 'store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTypedDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useBreakpoint = (): string => {
  const [breakpoint, setBreakpoint] = useState<'default' | 'laptop' | 'tablet' | 'bigMobile' | 'mobile'>('default');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > laptopNum) {
        setBreakpoint('default');

        return;
      }

      if (width > tabletNum) {
        setBreakpoint('laptop');

        return;
      }

      if (width > bigMobileNum) {
        setBreakpoint('tablet');

        return;
      }

      if (width > mobileNum) {
        setBreakpoint('bigMobile');

        return;
      }

      setBreakpoint('mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};
