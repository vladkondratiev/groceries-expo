import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';

export const GluestackProvider = ({ children }: PropsWithChildren) => {
  return (
    <GluestackUIProvider colorMode="light" config={config}>
      {children}
    </GluestackUIProvider>
  );
};
