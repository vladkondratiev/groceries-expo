import { KeyboardAvoidingView as GluestackKeyboardAvoidingView } from '@gluestack-ui/themed';
import { PropsWithChildren } from 'react';

import { useKeyboardOffset } from '@/hooks/use-keyboard-offset';

export const KeyboardAvoidingView = ({ children }: PropsWithChildren) => {
  const keyboardVerticalOffset = useKeyboardOffset();

  return (
    <GluestackKeyboardAvoidingView
      flex={1}
      behavior="height"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {children}
    </GluestackKeyboardAvoidingView>
  );
};
