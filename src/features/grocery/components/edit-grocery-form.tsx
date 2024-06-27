import { useRouter } from 'expo-router';

import { Loading } from '@/components/loading';
import { groceriesQueryHooks } from '@/query-hooks/groceries.query-hooks';

import { GroceryForm, GroceryFormInput } from './form';

interface EditGroceryFormProps {
  groceryId?: string | string[];
}

export const EditGroceryForm = ({ groceryId }: EditGroceryFormProps) => {
  const router = useRouter();
  const { mutate: updateGrocery, isPending } = groceriesQueryHooks.useUpdateGrocery();
  const { data: grocery, isLoading } = groceriesQueryHooks.useGetGrocery({ id: groceryId });

  const handleSubmit = (values: GroceryFormInput) => {
    if (!grocery) return;

    updateGrocery(
      {
        ...grocery,
        ...values,
      },
      {
        onSuccess: router.back,
      },
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <GroceryForm
      submitText="Edit Grocery"
      defaultValues={grocery}
      onSubmit={handleSubmit}
      isSubmitting={isPending}
    />
  );
};
