import { RootStylesFunction, AnimationFunction } from './types';

// useSingleToast/index.tsx
export const getRootStyles: RootStylesFunction = (position, offset) => {
  const offsetX = `${Array.isArray(offset) ? offset[0] : offset}px`;
  const offsetY = `${Array.isArray(offset) ? offset[1] : offset}px`;
  
  const commonStyles = {
    'position': 'fixed',
    'zIndex': '1000'
  };

  switch (position) {
    default: 
    case 'tl':
      return { top: offsetY, left: offsetX, ...commonStyles };
    case 'tr':
      return { top: offsetY, right: offsetX, ...commonStyles };
    case 'tc':
      return { top: offsetY, left: '50%', transform: 'translateX(-50%)', ...commonStyles };
    case 'bl':
      return { bottom: offsetY, left: offsetX, ...commonStyles };
    case 'br':
      return { bottom: offsetY, right: offsetX, ...commonStyles };
    case 'bc':
      return { bottom: offsetY, left: '50%', transform: 'translateX(-50%)', ...commonStyles}; 
  }
}

export const getToastAnimation: AnimationFunction = (options) => {
  const { animation, revealTime, transformTime, position } = options;
  const transformStartPercent: number = Math.floor((transformTime as number) / (revealTime as number) * 100);

  switch (animation) {
    case 'slide':
      const offsetY = `${position?.startsWith('t') ? -101 : 101}%`;
      return {
        '0%, 100%': {
          opacity: '0.4',
          transform: `translateY${offsetY}`
        },
        [`${transformStartPercent}%, ${100 - transformStartPercent}%`]: {
          opacity: '1',
          transform: 'translateY(0%)',
        }
      }
    case 'zoom':
      return {
        '0%': {
          opacity: '0',
          transform: 'scale(0.4)',
        },
        [`${100 - transformStartPercent}`]: {
          opacity: '1',
          transform: 'scale(1)',
        },
      }
      
    default:
      return {};
  }
}