import { Flex } from "@chakra-ui/react";

const Emoji = ({ children, emoji, onClick }) => {
  return (
    <Flex
      justify="center"
      align="center"
      boxSize={emoji ? "50px" : "30px"}
      rounded="100%"
      textAlign="center"
      bgColor="green.300"
      fontSize={emoji ? "30px" : "15px"}
      cursor="pointer"
      _hover={{
        transform: "scale(1.2)",
      }}
      onClick={onClick}
    >
      {children}
    </Flex>
  );
};

export default Emoji;
