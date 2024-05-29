import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import bgprofile from "../../../assets/image/bgprofile.jpeg";
const MyProfile = () => {
  return (
    <Flex
      cursor="pointer"
      direction="column"
      bgColor="itemColor"
      w="350px"
      rounded="15px"
      h="auto"
      pos="relative"
      color="white"
      mb="10px"
    >
      <Image
        src={bgprofile}
        h="110px"
        borderTopRightRadius="15px"
        borderTopLeftRadius="15px"
        width="100%"
      />

      <Box w="100%" textAlign="center" pos="absolute" top="25%">
        <Avatar />
      </Box>
      <Flex direction="column" p={3} gap="5px" mt="15px">
        <Box w="100%" textAlign="center" fontWeight="600" fontSize="18px">
          Ngo Xuan Huong
        </Box>
        <Box w="100%" textAlign="center" fontSize="14px" px="20px">
          🖐️ This is my profile welcome every body hehehehe, i love you💓
        </Box>
      </Flex>
      <Divider opacity="0.2" />
      <Flex align="center" justify="space-around" p={3}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          cursor="pointer"
        >
          <Text fontWeight="bold">6,600</Text>
          <Text fontSize="14px" color="GrayText">
            Followings
          </Text>
        </Flex>
        <Divider orientation="vertical" height="50px" opacity="0.2" />
        <Flex
          direction="column"
          justify="center"
          align="center"
          cursor="pointer"
        >
          <Text fontWeight="bold">6,600</Text>
          <Text fontSize="14px" color="GrayText">
            Followers
          </Text>
        </Flex>
      </Flex>
      <Divider opacity="0.2" />
      <Box
        w="100%"
        textAlign="center"
        p={4}
        color="primaryColor"
        fontWeight="bold"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        My Profile
      </Box>
    </Flex>
  );
};

export default MyProfile;
