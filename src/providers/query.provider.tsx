import { QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

import { queryClient } from '@/api/query-client';

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
