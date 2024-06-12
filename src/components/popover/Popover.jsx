import { Box, Flex } from "@chakra-ui/react";

const Popover = ({ onClick, onUpdateClick }) => {
  return (
    <Box>
      <Box
        pos="absolute"
        boxSize="0"
        borderTop="20px solid transparent"
        borderBottom="20px solid transparent"
        borderLeft="20px solid transparent"
        borderRight="20px solid #06141D"
        top="15px"
        right="5px"
      />
      <Flex
        bgColor="bgColor"
        pos="absolute"
        width="150px"
        zIndex="100"
        direction="column"
        overflow="hidden"
        align="center"
        right="5px"
        top="30px"
        roundedBottom="15px"
        roundedStart="15px"
        p={2}
      >
        <Box
          _hover={{ bgColor: "GrayText", cursor: "pointer" }}
          p={3}
          w="100%"
          textAlign="center"
          fontWeight="bold"
          rounded="5px"
          onClick={onUpdateClick}
        >
          Update Post
        </Box>
        <Box
          _hover={{ bgColor: "GrayText", cursor: "pointer" }}
          p={3}
          w="100%"
          textAlign="center"
          fontWeight="bold"
          rounded="5px"
          onClick={onClick}
        >
          Delete Post
        </Box>
      </Flex>
    </Box>
  );
};

export default Popover;
