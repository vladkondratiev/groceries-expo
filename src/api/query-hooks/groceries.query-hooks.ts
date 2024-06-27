import { useMutation, useQuery } from '@tanstack/react-query';

import { groceriesApiRequests } from '@/requests/groceries.api';

import { queryClient } from '../query-client';
import {
  CreateGroceryPayload,
  GetGroceryPayload,
  Grocery,
  RemoveGroceryPayload,
} from '../requests/types/groceries.types';

export enum GroceryKeys {
  GET_GROCERY = 'getGrocery',
  GET_GROCERIES = 'getGroceries',
  CREATE_GROCERY = 'createGrocery',
  UPDATE_GROCERY = 'updateGrocery',
  REMOVE_GROCERY = 'removeGrocery',
}

export const useGetGrocery = (payload: GetGroceryPayload) => {
  return useQuery({
    queryKey: [GroceryKeys.GET_GROCERY, payload.id],
    queryFn: () => groceriesApiRequests.getGrocery(payload),
  });
};

export const useGetGroceries = () => {
  return useQuery({
    queryKey: [GroceryKeys.GET_GROCERIES],
    queryFn: groceriesApiRequests.getGroceries,
  });
};

export const useCreateGrocery = () => {
  return useMutation<Grocery, Error, CreateGroceryPayload, Grocery>({
    mutationKey: [GroceryKeys.CREATE_GROCERY],
    mutationFn: groceriesApiRequests.createGrocery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GroceryKeys.GET_GROCERIES] });
    },
  });
};

export const useUpdateGrocery = () => {
  const queryKey = [GroceryKeys.UPDATE_GROCERY];
  const invalidateKey = [GroceryKeys.GET_GROCERIES];

  return useMutation<Grocery, Error, Grocery, Grocery>({
    mutationKey: queryKey,
    mutationFn: groceriesApiRequests.updateGrocery,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey });
      const prevGroceriesData: Grocery[] = queryClient.getQueryData(invalidateKey)!;
      const index = prevGroceriesData.findIndex((item) => item.id === variables.id);
      const newGroceriesData = [...prevGroceriesData];
      newGroceriesData[index] = variables;
      queryClient.setQueryData(invalidateKey, newGroceriesData);

      return variables;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: invalidateKey });
    },
  });
};

export const useRemoveGrocery = () => {
  return useMutation<Grocery, Error, RemoveGroceryPayload, Grocery>({
    mutationKey: [GroceryKeys.REMOVE_GROCERY],
    mutationFn: groceriesApiRequests.removeGrocery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GroceryKeys.GET_GROCERIES] });
    },
  });
};

export const groceriesQueryHooks = {
  useGetGrocery,
  useGetGroceries,
  useCreateGrocery,
  useUpdateGrocery,
  useRemoveGrocery,
};
