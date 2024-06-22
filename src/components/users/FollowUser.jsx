import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const FollowUser = ({ follower, fullname, avatar }) => {
  return (
    <Flex align="center" width="100%" justify="space-between" py={3}>
      <Flex gap="10px" cursor="pointer">
        <Avatar size="sm" src={avatar} />
        <Text>{fullname}</Text>
      </Flex>
      <Button
        bgColor="primaryColor"
        color="white"
        _hover={{ bgColor: "blue.200" }}
      >
        {follower ? "remove" : "unFollow"}
      </Button>
    </Flex>
  );
};

export default FollowUser;
