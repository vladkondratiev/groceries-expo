export interface Grocery {
  id: string;
  unit: string;
  title: string;
  amount: number;
  isChecked: boolean;
}

export interface GetGroceryPayload {
  id?: string | string[];
}

export type RemoveGroceryPayload = GetGroceryPayload;
export type CreateGroceryPayload = Omit<Grocery, 'id'>;
