import { Flex, Box, Button } from "@chakra-ui/react";
import SearchUser from "../SearchUser";
const Suggestions = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      bgColor="itemColor"
      w="350px"
      rounded="15px"
      h="auto"
      color="white"
      py={2}
      overflow="hidden"
    >
      <Box p={2} fontWeight="bold">
        Who is to follow you{" "}
      </Box>
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <SearchUser fullname="Ngo Xuan Huong" follow />
      <Box
        p={2}
        color="primaryColor"
        fontWeight="bold"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        See more
      </Box>
    </Flex>
  );
};

export default Suggestions;
