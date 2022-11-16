import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { css,  keyframes } from '@emotion/react';
import { ToastContainerProps } from '../types';
import { getToastAnimation } from '../utils';

function ToastContainer({ children, ...props }: PropsWithChildren<ToastContainerProps>): JSX.Element {
  const animation = getToastAnimation(props);

  const { revealTime = 4000 } = props;
  const animeTime = `${revealTime / 1000}s`;

  return <Container animation={animation} animeTime={animeTime}>{children}</Container>;
}

const Container = styled.div<{ animation: object, animeTime: string }>`
  ${({ animation, animeTime }) => css`animation: ${keyframes({ ...animation })} ${animeTime} ease;`}
`;

export default ToastContainer;
