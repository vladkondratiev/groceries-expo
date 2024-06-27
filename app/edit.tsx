import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useLayoutEffect } from 'react';

import { DeleteGroceryButton, EditGroceryForm } from '@/features/grocery';

export default function EditGroceryScreen() {
  const navigation = useNavigation();
  const { groceryId } = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: DeleteGroceryButton,
    });
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DeleteGroceryButton groceryId={groceryId} />,
    });
  }, [navigation, groceryId]);

  return <EditGroceryForm groceryId={groceryId} />;
}
