import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Flex,
  Text,
  ModalHeader,
  Button,
  useDisclosure,
  ModalFooter,
  Box,
  Stack,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import Post from "../Post";
import Comment from "./Comment";
import InputPost from "../InputPost";
import useGetComments from "../../../../hooks/comment/useGetComments";
import useGetPost from "../../../../hooks/post/useGetPost";
import useGetUser from "../../../../hooks/user/useGetUser";

export const ModalComment = ({ isOpenModal, onCloseModal, post }) => {
  const [customClose, setCustomClose] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { post: postDetail, loading } = useGetPost();

  const { user } = useGetUser(post?.authorId);

  const [content, setContent] = useState("");

  const handleClose = () => {
    if (content === "") {
      setCustomClose(true);
      onCloseModal();
    } else {
      setCustomClose(false);
      onOpen();
    }
  };

  const handleClosePost = () => {
    setContent("");
    onClose();
    onCloseModal();
  };

  const handleEmojiClick = (emojiObject) => {
    const newEmoji = emojiObject.emoji;
    setContent((prevValue) => prevValue + newEmoji);
  };

  const { comments, loading: loadingComment } = useGetComments();
  // console.log("comments", comments);
  return (
    <Box>
      <Modal isOpen={isOpenModal} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="itemColor"
          rounded="15px"
          w="50%"
          maxW="60%"
          color="white"
          position="relative"
          top="20px"
          height="auto"
          overflowX="hidden"
          maxH="80%"
        >
          {loading ? (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : (
            <ModalBody overflowY="auto">
              <Flex
                textAlign="center"
                pos="absolute"
                w="100%"
                fontSize="20px"
                fontWeight="bold"
                align="center"
                height="60px"
                justify="center"
                bgColor="gray.700"
                top="0"
                left="0"
                zIndex="9999"
              >
                <Text>Post's {user?.fullName}</Text>
                <ModalCloseButton />
              </Flex>
              <Flex direction="column" mt="30px" mb="100px">
                <Post width="100%" offModal post={postDetail} />
                {loadingComment ? (
                  <Spinner />
                ) : (
                  <Flex
                    direction="column"
                    textAlign={comments[post?._id]?.length < 1 && "center"}
                    color={comments[post?._id]?.length < 1 && "GrayText"}
                  >
                    {comments[post?._id]?.length > 0
                      ? comments[post?._id].map((comment) => {
                          return (
                            <Comment comment={comment} key={comment?._id} />
                          );
                        })
                      : "Be first to comment this post"}
                  </Flex>
                )}
              </Flex>
              <Flex
                gap="10px"
                px={3}
                mt="10px"
                pos="absolute"
                bottom="0"
                w="100%"
                bgColor="gray.700"
                left="0"
                py={2}
              >
                <Avatar />
                <InputPost
                  comment
                  top="-332px"
                  send
                  isValue
                  setValue={setContent}
                  handleEmojiClick={handleEmojiClick}
                  value={content}
                />
              </Flex>
            </ModalBody>
          )}
        </ModalContent>
        {!customClose && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgColor="itemColor"
              rounded="15px"
              color="white"
              pos="fixed"
              top="30%"
            >
              <ModalHeader>Leave page?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Are you sure you want to leave? All changes will be lost.
              </ModalBody>
              <ModalFooter gap="10px">
                <Button
                  variant="ghost"
                  bgColor="primaryColor"
                  color="white"
                  _hover={{ opacity: "0.8" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleClosePost}>
                  Leave
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Modal>
    </Box>
  );
};
