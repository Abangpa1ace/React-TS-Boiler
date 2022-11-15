import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const TRANSFORM_TIME = 300;

interface Props {
  position?: 'tl' | 'tr' | 'tc' | 'bl' | 'br' | 'bc';
  delay?: number;
}

function ToastContainer({ children, position, delay = 4000 }: PropsWithChildren<Props>): JSX.Element {
  const animeTime = `${delay / 1000}s`;
  const transAppear: number = Math.floor(TRANSFORM_TIME / delay * 100);
  const transOffset: string = `${position?.startsWith('t') ? -101 : 101}%`;

  return <Container animeTime={animeTime} transAppear={transAppear} transOffset={transOffset}>{children}</Container>;
}

interface AnimationType {
  animeTime: string;
  transAppear: number;
  transOffset: string;
}

const anime = (appear: number, offset: string): string => keyframes`
  0%, 100% { 
    opacity: 0.4;
    transform: translateY(${offset}); 
  };
  ${appear}%, ${100 - appear}% { 
    opacity: 1;
    transform: translateY(0%);
  };
`

const Container = styled.div<AnimationType>`
  ${({ animeTime, transAppear, transOffset }) => css`animation: ${anime(transAppear, transOffset)} ${animeTime} ease;`}
`;

export default ToastContainer;
