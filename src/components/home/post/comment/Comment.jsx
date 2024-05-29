import { Avatar, Flex, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import InputPost from "../InputPost";

const Comment = () => {
  const [like, setLike] = useState(false);
  const [reply, setReply] = useState(false);
  return (
    <Flex w="100%" gap="10px" px={3}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Flex direction="column">
        <Flex
          direction="column"
          bgColor="#28353E"
          py={2}
          rounded="15px"
          gap="2px"
          px={3}
        >
          <Text fontSize="15px" fontWeight="bold">
            Ngo Xuan Huong
          </Text>
          <Text fontSize="14px">
            Trong ví dụ trên, ảnh sẽ tự động điều chỉnh kích thước theo kích
            thước của khung chứa nó, nhưng không vượt quá chiều rộng tối đa là
            800px. Điều này giúp đảm bảo ảnh trông đẹp mắt trên mọi thiết bị.
          </Text>
        </Flex>
        <Flex px={3} py={1} gap="10px" color="GrayText" fontSize="14px">
          <Box as="span">2h</Box>
          <Box
            as="span"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            onClick={() => setLike(!like)}
            color={like && "red"}
          >
            Like
          </Box>
          <Box
            as="span"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            onClick={() => setReply(!reply)}
          >
            Reply
          </Box>
        </Flex>
        {reply && (
          <Flex left="50px" mb="10px" pos="relative" gap="10px">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <InputPost comment send width="90%" widthEmoji="11rem" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Comment;
