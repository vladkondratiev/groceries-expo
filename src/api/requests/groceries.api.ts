/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { apiClient } from '../api-client';
import {
  CreateGroceryPayload,
  GetGroceryPayload,
  Grocery,
  RemoveGroceryPayload,
} from './types/groceries.types';

const ENDPOINT = '/groceries';

const getGroceries = async () => {
  const { data } = await apiClient.get<Grocery[]>(ENDPOINT);

  return data;
};

const getGrocery = async ({ id }: GetGroceryPayload) => {
  const { data } = await apiClient.get<Grocery>(`${ENDPOINT}/${id}`);

  return data;
};

const createGrocery = async (payload: CreateGroceryPayload) => {
  const { data } = await apiClient.post<Grocery>(ENDPOINT, payload);

  return data;
};

const updateGrocery = async (payload: Grocery) => {
  const { data } = await apiClient.patch<Grocery>(`${ENDPOINT}/${payload.id}`, payload);

  return data;
};

const removeGrocery = async (payload: RemoveGroceryPayload) => {
  const { data } = await apiClient.delete<Grocery>(`${ENDPOINT}/${payload.id}`);

  return data;
};

export const groceriesApiRequests = {
  getGrocery,
  getGroceries,
  createGrocery,
  updateGrocery,
  removeGrocery,
};
