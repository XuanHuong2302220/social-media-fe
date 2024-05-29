import { Box, Flex } from "@chakra-ui/react";

const Quantity = ({ children, opacity }) => {
  return (
    <Box
      bgColor="primaryColor"
      borderRadius="100%"
      boxSize="20px"
      pos="absolute"
      top="3px"
      // right={active ? "245px" : "230px"}
      right="8px"
      opacity={opacity}
    >
      <Flex
        color="white"
        alignItems="center"
        fontSize="14px"
        fontWeight="bold"
        justify="center"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Quantity;
