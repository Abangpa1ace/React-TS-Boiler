import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';

import ToastContainer from './components/ToastContainer';
import { ToastChildren, ToastHookOptions, ToastHookReturns } from './types';
import { getRootStyles } from './utils';

const TOAST_ROOT_ID = 'root-single-toast';

const useSingleToast = ({
  position = 'tr',
  offset = 20,
  animation = 'zoom',
  revealTime = 4000,
  transformTime = 300,
  removeByRoute = true,
}: ToastHookOptions): ToastHookReturns => {
  let rootElement: HTMLElement | null = null;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // // React 18 Migration
  // let rootReactDOM: ReactDOMClient.Root | null = null;

  useEffect(() => {
    return () => {
      if (rootElement && removeByRoute) unmountRoot();
    }
  }, [position, offset, revealTime])

  const initRoot = () => {
    console.log('initRoot')
    rootElement = document.getElementById(TOAST_ROOT_ID) || document.createElement('div');
    rootElement.setAttribute('id', TOAST_ROOT_ID);
    Object.entries(getRootStyles(position, offset)).forEach(([key, value]) => (rootElement as HTMLElement).style[key as any] = value);
    document.body.appendChild(rootElement);
    document.body.style.minHeight = '100vh';

    // // React 18 Migration
    // rootReactDOM = ReactDOMClient.createRoot(rootElement);
  }

  const unmountRoot = () => {
    console.log('unmountRoot')
    if (rootElement) document.body.removeChild(rootElement as HTMLElement);
  }

  const addToast = async (children: ToastChildren) => {
    rootElement ? removeToast() : initRoot();
    // ~React 17
    ReactDOM.render(<ToastContainer revealTime={revealTime} transformTime={transformTime} position={position} animation={animation}>{children}</ToastContainer>, rootElement, () => {
      timer.current = setTimeout(removeToast, revealTime)
    });

    // // React 18 Migration
    // rootReactDOM?.render(<ToastContainer revealTime={revealTime} position={position}>{child}</ToastContainer>)
    // timer.current = setTimeout(removeToast, revealTime)
  };

  const removeToast = () => {
    console.log('removeToast')
    if (timer.current) clearTimeout(timer.current as ReturnType<typeof setTimeout>);
    // ~React 17
    ReactDOM.unmountComponentAtNode(rootElement as HTMLElement);

    // // React 18 Migration
    // rootReactDOM?.unmount();
  };

  return { toast: addToast };
};

export default useSingleToast;
