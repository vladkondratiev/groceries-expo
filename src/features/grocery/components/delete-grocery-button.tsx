import { Button, ButtonText } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { groceriesQueryHooks } from '@/query-hooks/groceries.query-hooks';

import { DeleteGroceryModal } from './delete-grocery-modal';

interface DeleteGroceryButtonProps {
  groceryId?: string | string[];
}

export const DeleteGroceryButton = ({ groceryId }: DeleteGroceryButtonProps) => {
  const router = useRouter();
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const { mutate: removeGrocery, isPending } = groceriesQueryHooks.useRemoveGrocery();

  const handleDeletePress = () => {
    if (!groceryId) return;

    removeGrocery(
      { id: groceryId },
      {
        onSuccess: router.back,
      },
    );
  };

  const toggleModalVisibility = () => {
    setDeleteModalVisible((prev) => !prev);
  };

  return (
    <>
      <DeleteGroceryModal
        isSubmitting={isPending}
        isOpen={isDeleteModalVisible}
        onConfirm={handleDeletePress}
        onClose={toggleModalVisibility}
      />
      <Button variant="link" action="negative" onPress={toggleModalVisibility}>
        <ButtonText>Delete</ButtonText>
      </Button>
    </>
  );
};
