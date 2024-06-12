import {
  Flex,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import SearchUser from "../SearchUser";

const Suggestions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      bgColor="itemColor"
      w="350px"
      rounded="15px"
      h="auto"
      color="white"
      py={2}
      overflow="hidden"
    >
      <Box p={2} fontWeight="bold">
        Who is to follow you{" "}
      </Box>
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <Box
        p={2}
        color="primaryColor"
        fontWeight="bold"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={onOpen}
      >
        See more
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="itemColor"
          color="white"
          mt="100px"
          rounded="15px"
        >
          <ModalHeader textAlign="center">Suggestions</ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH="400px" overflowY="auto" p={3}>
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
            <SearchUser fullname="Ngo Xuan Huong" follow />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Suggestions;
