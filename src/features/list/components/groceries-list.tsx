import { Box } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';

import { Loading } from '@/components/loading';
import { groceriesQueryHooks } from '@/query-hooks/groceries.query-hooks';

import { GROCERY_ITEM_HEIGHT } from '../constants/grocery';
import { GroceryItem } from './grocery-item';
import { GroceriesListEmpty } from './list-empty';

export const GroceriesList = () => {
  const { data, isLoading } = groceriesQueryHooks.useGetGroceries();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box flex={1}>
      <FlashList
        data={data}
        bounces={false}
        centerContent={!data?.length}
        estimatedItemSize={GROCERY_ITEM_HEIGHT}
        ListEmptyComponent={GroceriesListEmpty}
        renderItem={({ item }) => <GroceryItem {...item} />}
      />
    </Box>
  );
};
