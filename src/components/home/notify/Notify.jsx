import { Avatar, Flex, Text, Box } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
const Notify = ({
  fullname,
  like,
  love,
  haha,
  sad,
  angry,
  comment,
  reply,
  follow,
  isRead,
}) => {
  return (
    <Flex
      gap="20px"
      pos="relative"
      align="center"
      cursor="pointer"
      _hover={{
        bgColor: "#3a3b3c",
        borderRadius: "10px",
      }}
      p={2}
    >
      <Avatar boxSize="56px" />
      <Flex flexDirection="column">
        <Text color={isRead ? "GrayText" : "white"} fontWeight="bold">
          {fullname} {""}
          <Box as="span" color={isRead ? "GrayText" : "white"} fontWeight="400">
            {like || love || haha || sad || angry
              ? "expressed feeling about your post"
              : comment
              ? "commented on your post"
              : reply
              ? "replied to your comment"
              : follow
              ? "started following you"
              : ""}
          </Box>
        </Text>
        <Box as="span" fontSize="14px" color={isRead ? "GrayText" : "white"}>
          2 hours ago
        </Box>
      </Flex>
      <Box
        color="iconClor"
        fontSize="15px"
        _hover={{ cursor: "pointer", color: "primaryColor" }}
      >
        <BsThreeDots />
      </Box>
      {like && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          👍
        </Box>
      )}

      {love && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          ❤️
        </Box>
      )}

      {haha && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          😂
        </Box>
      )}

      {sad && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          😢
        </Box>
      )}

      {angry && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          😡
        </Box>
      )}

      {(comment || reply) && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          💬
        </Box>
      )}

      {follow && (
        <Box fontSize="25px" pos="absolute" left="40px" bottom="10px">
          👀
        </Box>
      )}
    </Flex>
  );
};

export default Notify;
