import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

const defaultQueryConfig = {
  retry: 1,
  retryDelay: 500,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

const onError = () => {
  Toast.show({
    type: 'error',
    text1: 'Oops...',
    text2: 'Something went wrong! Please, contact our support team.',
    position: 'bottom',
  });
};

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
  queryCache: new QueryCache({ onError }),
  mutationCache: new MutationCache({ onError }),
});
