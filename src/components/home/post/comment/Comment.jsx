import { Avatar, Flex, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import InputPost from "../InputPost";
import useGetUser from "../../../../hooks/user/useGetUser";
import useGetReplyComments from "../../../../hooks/replyComment/useGetReplyComments";
import useComment from "../../../../zustands/useComment";

const Comment = ({ comment }) => {
  const [like, setLike] = useState(false);
  const [reply, setReply] = useState(false);
  const { user } = useGetUser(comment.senderId);

  const [content, setContent] = useState("");

  const handleEmojiClick = (emojiObject) => {
    const newEmoji = emojiObject.emoji;
    setContent((prevValue) => prevValue + newEmoji);
  };
  // console.log("user", user);

  //handle reply
  const { setComment } = useComment();

  const handleReply = () => {
    setReply(!reply);
    setComment(comment);
  };

  return (
    <Flex w="100%" direction="column">
      <Flex w="100%" gap="10px" px={3}>
        <Avatar src={user?.profilePicture} />
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
              {user?.fullName || "test"}
            </Text>
            <Text fontSize="14px">{comment?.content || "test"}</Text>
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
              onClick={handleReply}
            >
              Reply
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {reply ? (
        <Flex left="75px" mb="10px" pos="relative" gap="10px">
          <Avatar src={user?.profilePicture} />
          <InputPost
            comment
            width="90%"
            send
            value={content}
            setValue={setContent}
            widthEmoji="12rem"
            handleEmojiClick={handleEmojiClick}
            reply
            top="-332px"
            right="70px"
          />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Comment;
