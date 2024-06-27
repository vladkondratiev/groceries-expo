import {
  Button,
  ButtonText,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@gluestack-ui/themed';

interface GroceriesModalProps {
  isOpen: boolean;
  isSubmitting?: boolean;
  onClose(): void;
  onConfirm(): void;
}

export const DeleteGroceryModal = ({
  isOpen,
  isSubmitting,
  onClose,
  onConfirm,
}: GroceriesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Confirm Deletion</Heading>
        </ModalHeader>
        <ModalBody>
          <Text>Are you sure you want to delete this item?</Text>
        </ModalBody>
        <ModalFooter>
          <Button mr="$3" size="sm" variant="outline" action="secondary" onPress={onClose}>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            borderWidth="$0"
            action="negative"
            onPress={onConfirm}
            disabled={isSubmitting}>
            <ButtonText>Delete</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
