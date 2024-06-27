import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export const RNThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider value={CustomDefaultTheme}>{children}</ThemeProvider>;
};
