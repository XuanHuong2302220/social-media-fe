import { Flex } from "@chakra-ui/react";

const Interact = ({ children, onClick, pos, onMouseEnter, onMouseLeave }) => {
  return (
    <Flex
      width="50%"
      align="center"
      justify="center"
      bgColor="#28353e"
      p={2}
      gap={1}
      rounded="10px"
      _hover={{ opacity: "0.8", cursor: "pointer" }}
      onClick={onClick}
      pos={pos}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Flex>
  );
};

export default Interact;
