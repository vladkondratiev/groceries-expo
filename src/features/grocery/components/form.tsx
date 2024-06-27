import { Box, Button, ButtonSpinner, ButtonText, HStack, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as yup from 'yup';

import { KeyboardAvoidingView } from '@/components/keyboard-avoiding';
import { TextInput } from '@/components/text-input';

export interface GroceryFormInput {
  title: string;
  amount: number;
  unit: string;
}

const schema = yup.object().shape({
  title: yup.string().required('Grocery is required'),
  amount: yup
    .number()
    .typeError('Amount is required')
    .required('Amount is required')
    .positive('Amount should be a positive number')
    .integer('Amount should be integer'),
  unit: yup.string().required('Unit is required'),
});

interface GroceryFormProps {
  submitText: string;
  isSubmitting?: boolean;
  defaultValues?: GroceryFormInput;
  onSubmit(values: GroceryFormInput): void;
}

export const GroceryForm = ({
  isSubmitting,
  submitText,
  defaultValues,
  onSubmit,
}: GroceryFormProps) => {
  const insets = useSafeAreaInsets();
  const { control, handleSubmit } = useForm<GroceryFormInput>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <KeyboardAvoidingView>
      <Box flex={1} p="$5" justifyContent="space-between">
        <VStack space="lg">
          <TextInput name="title" label="Title" control={control} placeholder="Still Water" />
          <HStack space="lg">
            <Box flex={2}>
              <TextInput
                name="amount"
                label="Amount"
                control={control}
                placeholder="10"
                keyboardType="number-pad"
              />
            </Box>
            <Box flex={1}>
              <TextInput
                name="unit"
                label="Unit"
                placeholder="L"
                control={control}
                autoCapitalize="none"
              />
            </Box>
          </HStack>
        </VStack>
        <Button
          isDisabled={isSubmitting}
          size="md"
          mb={insets.bottom}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={handleSubmit(onSubmit)}>
          {isSubmitting && <ButtonSpinner mr="$2" />}
          <ButtonText>{submitText}</ButtonText>
        </Button>
      </Box>
    </KeyboardAvoidingView>
  );
};
