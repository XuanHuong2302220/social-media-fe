import { Avatar, Flex, Box, useDisclosure } from "@chakra-ui/react";

import Modals from "../Modals";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" w="100%" bgColor="itemColor" p={4} rounded="15px">
      <Flex align="center" gap="10px">
        <Avatar />
        <Box
          width="100%"
          bgColor="#28353E"
          color="white"
          borderColor="#28353E"
          rounded="20px"
          p={3}
          _hover={{
            cursor: "pointer",
            opacity: "0.8",
          }}
          onClick={onOpen}
        >
          What's happenning?
        </Box>
      </Flex>

      <Modals isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default CreatePost;
