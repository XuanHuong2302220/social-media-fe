import { Box, Flex } from "@chakra-ui/react";

const IconCustom = ({ children, color, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      boxSize={color && "40px"}
      rounded={color ? "100%" : "none"}
      textAlign={color && "center"}
      color={color ? color : "iconColor"}
      fontSize="20px"
      bgColor={color ? "#3a3b3c" : "transparent"}
      _hover={{ cursor: "pointer", color: color ? "white" : "primaryColor" }}
      justify={color && "center"}
      align={color && "center"}
    >
      {children}
    </Flex>
  );
};

export default IconCustom;
