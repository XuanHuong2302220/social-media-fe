import React from "react";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CiCamera } from "react-icons/ci";
import Modals from "../Modals";

const NonPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        boxSize="70px"
        rounded="100%"
        align="center"
        justify="center"
        color="GrayText"
        fontSize="50px"
        border="1px solid GrayText"
        opacity="0.5"
        mt="100px"
      >
        <CiCamera />
      </Flex>
      <Text fontSize="30px" fontWeight="bold">
        Share Photos
      </Text>
      <Text>When you share photos, they will appear on your profile.</Text>
      <Text
        color="primaryColor"
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
        onClick={onOpen}
      >
        Share your first photo
      </Text>
      <Modals isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NonPost;
