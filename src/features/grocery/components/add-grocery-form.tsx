import { useRouter } from 'expo-router';

import { groceriesQueryHooks } from '@/query-hooks/groceries.query-hooks';

import { GroceryForm, GroceryFormInput } from './form';

export const AddGroceryForm = () => {
  const router = useRouter();
  const { mutate: createGrocery, isPending } = groceriesQueryHooks.useCreateGrocery();

  const handleSubmit = (values: GroceryFormInput) => {
    createGrocery(
      { ...values, isChecked: false },
      {
        onSuccess: router.back,
      },
    );
  };

  return <GroceryForm submitText="Add Grocery" onSubmit={handleSubmit} isSubmitting={isPending} />;
};
