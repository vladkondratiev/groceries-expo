import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputProps as RNTextInputProps } from 'react-native';

type ControlProps<T extends FieldValues> = Pick<
  UseControllerProps<T>,
  'control' | 'name' | 'rules' | 'disabled'
>;
type FormInputProps<T extends FieldValues> = ControlProps<T> &
  Omit<RNTextInputProps, keyof ControlProps<T>>;

interface TextInputProps<T extends FieldValues> extends FormInputProps<T> {
  label: string;
}

export const TextInput = <T extends FieldValues>({
  name,
  label,
  control,
  ...inputProps
}: TextInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <FormControl size="md" isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField value={value} {...inputProps} onBlur={onBlur} onChangeText={onChange} />
          </Input>
          <FormControlError>
            <FormControlErrorText>{error?.message}</FormControlErrorText>
          </FormControlError>
        </FormControl>
      )}
    />
  );
};
