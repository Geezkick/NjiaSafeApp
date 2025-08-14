import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#FF4500', // Orange
    accent: '#6A1B9A', // Purple
    background: '#FFFFFF',
    text: '#333333',
    error: '#FF0000',
  },
  gradients: {
    primary: ['#FF4500', '#6A1B9A'],
  },
  shadows: {
    premium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
  animations: {
    fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
  },
};