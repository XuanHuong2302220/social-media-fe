import { Flex } from "@chakra-ui/react";

const IconCustom = ({ children, color, onClick, display, pos, fontSize }) => {
  return (
    <Flex
      onClick={onClick}
      boxSize={color && "40px"}
      rounded={color ? "100%" : "none"}
      textAlign={color && "center"}
      color={color ? color : "iconColor"}
      fontSize={fontSize ? fontSize : "20px"}
      bgColor={color ? "#3a3b3c" : "transparent"}
      _hover={{ cursor: "pointer", color: color ? "white" : "primaryColor" }}
      justify={color && "center"}
      align={color && "center"}
      display={display}
      pos={pos}
    >
      {children}
    </Flex>
  );
};

export default IconCustom;
