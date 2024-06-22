import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ModalCreatePost = ({
  isOpen,
  onClose,
  setValue,
  setImage,
  setImageURL,
  onCloseModal,
  update,
}) => {
  const handleClose = () => {
    if (update) {
      onCloseModal();
      onClose();
    } else {
      onClose();
      setValue("");
      setImage("");
      setImageURL("");
      onCloseModal();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="200px" bgColor="itemColor" color="white" rounded="15px">
        <ModalHeader>Leave?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to leave? You have unsaved changes that will be
          lost.
        </ModalBody>
        <ModalFooter gap="10px">
          <Button onClick={onClose} bgColor="primaryColor" color="white">
            Stay
          </Button>
          <Button onClick={handleClose} bgColor="red" color="white">
            Leave
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreatePost;
