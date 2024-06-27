import { useHeaderHeight } from '@react-navigation/elements';
import { StatusBar } from 'react-native';

export const useKeyboardOffset = () => {
  const headerheight = useHeaderHeight();
  const statusBarHeight = StatusBar.currentHeight || 0;

  return headerheight + statusBarHeight;
};
