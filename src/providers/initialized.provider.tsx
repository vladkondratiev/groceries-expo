import { PropsWithChildren } from 'react';
import ToastManager from 'react-native-toast-message';

import { GluestackProvider } from './gluestack.provider';
import { QueryProvider } from './query.provider';
import { RNThemeProvider } from './rn-theme.provider';

export const InitializedProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <GluestackProvider>
        <RNThemeProvider>
          {children}
          <ToastManager />
        </RNThemeProvider>
      </GluestackProvider>
    </QueryProvider>
  );
};
