import React, { useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';

import ToastContainer from '../ToastContainer';

const TOAST_ROOT_ID = 'toast-root';

const getAttributes = (position: ToastPosition, px = 10): object => {
  const offset = `${px}px`;

  switch (position) {
    default: 
    case 'tl':
      return { top: offset, left: offset };
    case 'tr':
      return { top: offset, right: offset };
    case 'tc':
      return { top: offset, left: '50%', transform: 'translateX(-50%)' };
    case 'bl':
      return { bottom: offset, left: offset };
    case 'br':
      return { bottom: offset, right: offset };
    case 'bc':
      return { bottom: offset, left: '50%', transform: 'translateX(-50%)' }; 
  }
}

type ToastPosition = 'tl' | 'tr' | 'tc' | 'bl' | 'br' | 'bc';

interface Options {
  position?: ToastPosition;
  delay?: number;
  removeByRoute?: boolean;
};

interface Returns {
  toast: (child: string | React.ReactNode | React.ReactNode[]) => void;
}

const useSingleToast = ({
  position = 'bl',
  delay = 4000,
  removeByRoute = true,
}: Options): Returns => {
  let rootElement: HTMLDivElement | null = null;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // // React 18 Migration
  // let rootReactDOM: ReactDOMClient.Root | null = null;

  useEffect(() => {
    renderRoot();

    return () => {
      if (removeByRoute) unmountRoot();
    }
  }, [removeByRoute, position])

  const renderRoot = () => {
    rootElement = document.createElement('div');
    rootElement.setAttribute('id', TOAST_ROOT_ID);
    console.log(Object.entries(getAttributes(position)))
    rootElement.style.position = "fixed"
    Object.entries(getAttributes(position)).forEach(([key, value]) => (rootElement as HTMLDivElement).style[key as string] = value);

    // rootElement.style.top = "10px"
    // rootElement.style.right = "10px"
    document.body.appendChild(rootElement);
    document.body.style.minHeight = '100vh';

    // // React 18 Migration
    // rootReactDOM = ReactDOMClient.createRoot(rootElement);
  }

  const unmountRoot = () => {
    document.body.removeChild(rootElement as HTMLDivElement);
  }

  const addToast = async (child: string | React.ReactNode | React.ReactNode[]) => {
    removeToast();
    // ~React 17
    ReactDOM.render(<ToastContainer delay={delay} position={position}>{child}</ToastContainer>, rootElement, () => {
      timer.current = setTimeout(removeToast, delay)
    });

    // // React 18 Migration
    // rootReactDOM?.render(<ToastContainer delay={delay}>{child}</ToastContainer>)
    // timer.current = setTimeout(removeToast, delay)
  };

  const removeToast = () => {
    if (timer.current) clearTimeout(timer.current as ReturnType<typeof setTimeout>);
    // ~React 17
    ReactDOM.unmountComponentAtNode(rootElement as HTMLDivElement);

    // // React 18 Migration
    // rootReactDOM?.unmount();
  };

  return { toast: addToast };
};

export default useSingleToast;
