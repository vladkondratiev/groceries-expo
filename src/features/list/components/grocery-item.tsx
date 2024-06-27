import { Button, ButtonIcon, EditIcon, HStack, styled, Text } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

import { GroceriesCheckbox } from '@/components/checkbox';
import { groceriesQueryHooks } from '@/query-hooks/groceries.query-hooks';
import { Grocery } from '@/requests/types/groceries.types';

import { GROCERY_ITEM_HEIGHT } from '../constants/grocery';

export const GroceryItem = (grocery: Grocery) => {
  const router = useRouter();
  const { id, title, amount, unit, isChecked } = grocery;
  const { mutate: updateGrocery, isPending } = groceriesQueryHooks.useUpdateGrocery();
  const textDecoration = isChecked ? 'line-through' : 'none';

  const handleEditPress = () => {
    router.push({
      pathname: 'edit',
      params: { groceryId: id },
    });
  };

  const handleCheckboxPress = () => {
    updateGrocery({
      ...grocery,
      isChecked: !isChecked,
    });
  };

  return (
    <StyledHStack space="lg">
      <HStack space="lg">
        <GroceriesCheckbox
          value={id}
          isChecked={isChecked}
          isDisabled={isPending}
          onChange={handleCheckboxPress}
        />
        <Text bold textDecorationLine={textDecoration}>
          {title}
        </Text>
        <HStack>
          <Text mr="$0.5" textDecorationLine={textDecoration}>
            {amount}
          </Text>
          <Text textDecorationLine={textDecoration}>{unit}</Text>
        </HStack>
      </HStack>
      <Button variant="link" size="xl" onPress={handleEditPress}>
        <ButtonIcon as={EditIcon} />
      </Button>
    </StyledHStack>
  );
};

const StyledHStack = styled(HStack, {
  height: GROCERY_ITEM_HEIGHT,
  alignItems: 'center',
  borderBottomWidth: 1,
  paddingHorizontal: '$5',
  justifyContent: 'space-between',
  borderBottomColor: '$trueGray200',
});
