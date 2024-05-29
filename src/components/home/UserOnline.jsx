import { Avatar, AvatarBadge, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const UserOnline = () => {
  const OnlineUser = () => {
    return (
      <Flex
        p={2}
        align="center"
        gap="10px"
        _hover={{ bgColor: "gray.700", cursor: "pointer" }}
      >
        <Avatar size="sm">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Text fontSize="14px" color="white" fontWeight="bold">
          Ngo Xuan Huong
        </Text>
      </Flex>
    );
  };
  return (
    <Flex
      direction="column"
      bgColor="itemColor"
      rounded="15px"
      overflowX="hidden"
      overflowY="auto"
      maxH="89%"
      h="auto"
    >
      <Text fontSize="20px" fontWeight="bold" color="white" p={2}>
        User Online
      </Text>
      <Divider />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
    </Flex>
  );
};

export default UserOnline;
