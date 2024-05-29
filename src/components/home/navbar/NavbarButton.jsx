import { Box, Flex, Text } from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import Quantity from "../../Quantity";
import { useState, useEffect } from "react";

const NavbarButton = ({ onClick, active, text, quantity }) => {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    if (active) {
      setNumber(0);
    }
  }, [quantity, active]);

  return (
    <Flex
      align="center"
      gap="5px"
      h="auto"
      justify="center"
      transition="width 0.2s linear"
      w={active ? "100px" : "50px"}
      px={3}
      py={2}
      bgColor={active ? "white" : "transparent"}
      color={active ? "black" : "white"}
      fontWeight="bold"
      borderRadius="50px"
      _hover={{
        bgColor: active
          ? "white"
          : text === "Home"
          ? "transparent"
          : "gray.200",
        cursor: text === "Home" ? "default" : "pointer",
      }}
      onClick={onClick}
      pos="relative"
    >
      <Box color={active ? "primaryColor" : "iconColor"} textAlign="right">
        {text === "Notify" ? (
          <IoMdNotifications style={{ fontSize: "30px" }} />
        ) : text === "Mess" ? (
          <AiFillMessage style={{ fontSize: "30px" }} />
        ) : (
          <AiFillHome style={{ fontSize: "30px" }} />
        )}
      </Box>

      {text === "Home" ? null : (
        <Quantity opacity={number === 0 ? 0 : 1}>{quantity}</Quantity>
      )}
      {active && (
        <Text textAlign="left" fontSize="14px">
          {text}
        </Text>
      )}
    </Flex>
  );
};

export default NavbarButton;
