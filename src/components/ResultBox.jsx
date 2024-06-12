import { Box, Flex, Text } from "@chakra-ui/react";

const ResultBox = ({
  children,
  width,
  top,
  bottom,
  left,
  right,
  overflowY,
  maxH,
  display,
}) => {
  return (
    <Box
      mt={1}
      display={display}
      overflowY={overflowY}
      pos="absolute"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.5)"
      bgColor="#1A2730"
      maxH={maxH ? maxH : "500px"}
      h={children ? "auto" : "50px"}
      color="white"
      top={top ? top : "50px"}
      w={width ? width : "100%"}
      left={left ? left : "0"}
      right={right}
      bottom={bottom}
      borderBottomLeftRadius="20px"
      borderBottomRightRadius="20px"
      p={2}
      zIndex="9997"
    >
      <Flex flexDirection="column">
        {children ? children : <Text textAlign="center">No result found</Text>}
      </Flex>
    </Box>
  );
};

export default ResultBox;
