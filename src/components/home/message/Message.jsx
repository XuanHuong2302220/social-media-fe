import { Avatar, Box, Flex } from "@chakra-ui/react";

const Message = ({ children, justify }) => {
  return (
    <Flex p={3} gap={2} align="center" justify={justify}>
      {justify === "flex-start" && <Avatar size="sm" />}
      <Box
        py={2}
        px={3}
        rounded="20px"
        bgColor={justify === "flex-start" ? "GrayText" : "primaryColor"}
        textAlign="start"
        maxW="60%"
        color="white"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Message;
