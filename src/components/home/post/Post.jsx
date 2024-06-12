import { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import IconCustom from "../../IconCustom";
import { BsThreeDots } from "react-icons/bs";
import Interact from "./Interact";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import ModalComment from "./comment/ModalComment";
import { Link } from "react-router-dom";
import Popover from "../../popover/Popover";
import ModalDeletePost from "./../../modals/ModalDeletePost";
import Modals from "../Modals";
import useCreateLike from "../../../hooks/like/useCreateLike";
import useGetLike from "../../../hooks/like/useGetLike";

const Post = ({ width, offModal, post }) => {
  const [seemore, setSeemore] = useState(false);
  const [like, setLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [popover, setPopover] = useState(false);

  const limitWords = (content, limit) => {
    if (!content) return;
    const words = content.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ";
    } else return words;
  };

  // outSideClick
  const popoverRef = useRef();
  useOutsideClick({
    ref: popoverRef,
    handler: () => {
      setPopover(false);
    },
  });

  //format number
  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

  // handleDeleteClick
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const handleDeleteClick = () => {
    onOpenDelete();
  };

  //handle click update
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();
  const handleUpdateClick = () => {
    onOpenUpdate();
  };

  //handle like post
  const { createLike } = useCreateLike();
  const handleLikePost = async () => {
    setLike(!like);
    if (like) {
      //call api create like
      await createLike(post._id);
    } else {
      //call api delete like
    }
  };

  //get like
  const { likes } = useGetLike(post._id);

  const handleLike = () => {
    //call api get like
    if (likes) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <Box
      border="1px solid itemColor"
      width={width ? width : "70%"}
      h="auto"
      bgColor="itemColor"
      rounded="15px"
      mt={4}
      p={4}
      color="white"
    >
      <Flex direction="column" w="100%">
        {/* infor user */}
        <Flex align="center" justify="space-between" pb={3}>
          <Flex gap="10px">
            <Link to="/profile/:id">
              <Avatar cursor="pointer" />
            </Link>
            <Box>
              <Link to="/profile/:id">
                <Text
                  fontWeight="bold"
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {post?.authorName}
                </Text>
              </Link>
              <Text color="GrayText" fontSize="12px">
                five minutes ago
              </Text>
            </Box>
          </Flex>
          <Box pos="relative" ref={popoverRef}>
            <IconCustom onClick={() => setPopover(true)}>
              <BsThreeDots />
            </IconCustom>

            {popover && (
              <Popover
                onClick={handleDeleteClick}
                onUpdateClick={handleUpdateClick}
              />
            )}
            <ModalDeletePost
              onClose={onCloseDelete}
              isOpen={isOpenDelete}
              postId={post._id}
              postImg={post.image}
            />
            <Modals
              isOpen={isOpenUpdate}
              onClose={onCloseUpdate}
              valueUpdate={post?.title}
              imageUpdate={post?.image}
              update
              postId={post._id}
            />
          </Box>
        </Flex>

        {/* content */}
        <Text fontSize="20px" px={2}>
          {seemore ? limitWords(post?.title, 150) : post?.title}
          {seemore && (
            <Box
              as="span"
              color="GrayText"
              fontSize="14px"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setSeemore(false)}
            >
              See more
            </Box>
          )}
        </Text>

        {/* image */}
        <Image
          w="100%"
          src={post?.image}
          mt={3}
          cursor="pointer"
          h="auto"
          onClick={onOpen}
        />

        {/* interact and comments */}
        <Flex py={3} justify="space-between" align="center" px={2}>
          <Box
            as="span"
            color="GrayText"
            fontSize="14px"
            _hover={{
              cursor: post?.like > 0 && "pointer",
              textDecoration: post?.like > 0 && "underline",
            }}
          >
            {post?.like > 0
              ? formatNumber(post?.like) + "Like"
              : "Be the first to like this"}
          </Box>

          <Box
            as="span"
            color="GrayText"
            fontSize="14px"
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {post?.comment + " Comments"}
          </Box>
        </Flex>

        <Flex justify="space-between" gap={2}>
          <Interact pos="relative" onClick={handleLikePost}>
            <FaHeart
              color={like ? "#ff3040" : null}
              style={{ fontSize: "20px" }}
            />

            <Box as="span" color={like ? "#ff3040" : null} fontWeight="bold">
              Like
            </Box>
          </Interact>
          <Interact onClick={onOpen}>
            <FaRegComment style={{ fontSize: "20px" }} />
            <Box as="span" fontWeight="bold">
              Comment
            </Box>
          </Interact>
        </Flex>

        {/* modal comment */}
      </Flex>
      {!offModal && (
        <ModalComment isOpenModal={isOpen} onCloseModal={onClose} post={post} />
      )}
    </Box>
  );
};

export default Post;
