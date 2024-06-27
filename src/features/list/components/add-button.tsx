import { AddIcon, Fab, FabIcon } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export const AddButton = () => {
  const router = useRouter();
  const handlePress = () => router.push('add');

  return (
    <Fab mb="$5" size="lg" placement="bottom right" onPress={handlePress}>
      <FabIcon as={AddIcon} size="lg" />
    </Fab>
  );
};
