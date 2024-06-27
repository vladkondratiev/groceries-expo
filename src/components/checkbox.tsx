import { CheckboxIcon, CheckboxIndicator, CheckIcon } from '@gluestack-ui/themed';
import { Checkbox } from '@gluestack-ui/themed';

interface GroceriesCheckboxProps {
  value: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange(): void;
}

export const GroceriesCheckbox = ({ value, isChecked, onChange }: GroceriesCheckboxProps) => {
  return (
    <Checkbox
      size="md"
      value={value}
      onChange={onChange}
      isChecked={isChecked}
      aria-label="item checkbox">
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
    </Checkbox>
  );
};
