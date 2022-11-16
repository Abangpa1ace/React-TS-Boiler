export type ToastChildren = string | React.ReactNode | React.ReactNode[]

export type ToastPosition = 'tl' | 'tr' | 'tc' | 'bl' | 'br' | 'bc';

type ToastOffset = number | [number, number];

export interface ToastHookOptions {
  position?: ToastPosition;
  offset?: ToastOffset;
  animation?: ToastAnimation;
  revealTime?: number;
  transformTime?: number;
  removeByRoute?: boolean;
}

export interface ToastHookReturns {
  toast: (children: ToastChildren) => void;
}

export type RootStylesFunction = (position: ToastPosition, offset: ToastOffset) => Record<string, string>;

export interface ToastContainerProps {
  position?: ToastPosition;
  animation?: ToastAnimation;
  revealTime?: number;
  transformTime?: number;
}

export type ToastAnimation = 'slide' | 'zoom';

export type AnimationFunction = (options: ToastContainerProps) => object