import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

function Toast({ children }: PropsWithChildren<any>): JSX.Element {
  return (
    <ToastStyles>
      {children}
    </ToastStyles>
  )
}

const ToastStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: lightskyblue;
  font-weight: bold;
`
export default Toast