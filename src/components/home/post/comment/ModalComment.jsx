import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Flex,
  Text,
  ModalHeader,
  Button,
  useDisclosure,
  ModalFooter,
  Box,
} from "@chakra-ui/react";

import { useState } from "react";

import Post from "../Post";
import Comment from "./Comment";
import InputPost from "../InputPost";

const ModalComment = ({ isOpenModal, onCloseModal }) => {
  const [customClose, setCustomClose] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const value = "";

  const handleClose = () => {
    if (value === "") {
      setCustomClose(true);
      onCloseModal();
    } else {
      setCustomClose(false);
      onOpen();
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpenModal} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="itemColor"
          rounded="15px"
          w="50%"
          maxW="60%"
          color="white"
          position="fixed"
          top="20px"
          height="80%"
          overflowY="auto"
        >
          <ModalBody>
            <Flex
              textAlign="center"
              pos="fixed"
              w="50%"
              left="25%"
              fontSize="20px"
              fontWeight="bold"
              align="center"
              height="60px"
              justify="center"
              bgColor="gray.700"
              top="12%"
              zIndex="9999"
            >
              <Text>Post's Ngo Xuan Huong</Text>
              <ModalCloseButton />
            </Flex>
            <Flex direction="column" mt="30px" mb="100px">
              <Post width="100%" offModal />
              <Comment />
              <Comment />
              <Comment />
            </Flex>
            <Flex
              gap="10px"
              px={3}
              mt="10px"
              pos="fixed"
              bottom="57px"
              w="50%"
              bgColor="gray.700"
              left="25%"
              py={2}
            >
              <Avatar />
              <InputPost comment top="-332px" send isValue />
            </Flex>
          </ModalBody>
        </ModalContent>
        {!customClose && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgColor="itemColor"
              rounded="15px"
              color="white"
              pos="fixed"
              top="30%"
            >
              <ModalHeader>Leave page?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Are you sure you want to leave? All changes will be lost.
              </ModalBody>
              <ModalFooter gap="10px">
                <Button
                  variant="ghost"
                  bgColor="primaryColor"
                  color="white"
                  _hover={{ opacity: "0.8" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onCloseModal}>
                  Leave
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Modal>
    </Box>
  );
};

export default ModalComment;
