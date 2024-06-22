import React, { useEffect, useRef, useState } from "react";
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
import { useAuthContext } from "../../../contexts/authContext";
import useDeleteLike from "../../../hooks/like/useDeleteLike";
import ModalUserLike from "../../modals/ModalUserLike";
import usePost from "../../../zustands/usePost";
import useGetUser from "../../../hooks/user/useGetUser";

const Post = ({ width, offModal, post }) => {
  const [seemore, setSeemore] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [popover, setPopover] = useState(false);
  const { authUser } = useAuthContext();
  const [likeClick, setLikeClick] = useState(false);
  const { likes, setLikes, setPost, comments, setComments } = usePost();

  useEffect(() => {
    setPost(post);

    if (post?.like) {
      setLikes(post?._id, post?.like);
    }

    if (post?.comment) {
      setComments(post?._id, post?.comment);
    }
  }, [post, setPost, setLikes, setComments]);

  // console.log("post", post);

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
    setPost(post);
    onOpenUpdate();
  };

  //handle click user liked
  const {
    isOpen: isOpenUserLiked,
    onOpen: onOpenUserLiked,
    onClose: onCloseUserLiked,
  } = useDisclosure();

  // get likes
  const handleGetLike = () => {
    setPost(post);
    onOpenUserLiked();
  };

  const { user } = useGetUser(post?.authorId);

  //handle like and delete like post
  const { createLike } = useCreateLike();
  const { deleteLike } = useDeleteLike();

  useEffect(() => {
    const userLiked = likes[post?._id]?.includes(authUser?._id);
    setLikeClick(userLiked);
  }, [likes, post?._id, authUser]);

  const handleLike = async () => {
    const updateLike = likeClick
      ? likes[post?._id].filter((id) => id !== authUser?._id)
      : [...likes[post?._id], authUser?._id];
    setLikes(post?._id, updateLike);
    setLikeClick(!likeClick);
    if (likeClick) {
      await deleteLike(post?._id);
    } else {
      await createLike(post?._id);
    }
  };

  // handle setpost modalcomment

  const handleOpenModalComment = async () => {
    // setPost(post);
    // console.log("post", post);
    onOpen();
  };

  const handleCloseModalComment = async () => {
    setPost(null);
    onClose();
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
                  {user?.fullName}
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
              postId={post?._id}
              postImg={post?.image}
            />
            <Modals
              isOpen={isOpenUpdate}
              onClose={onCloseUpdate}
              valueUpdate={post?.title}
              imageUpdate={post?.image}
              update
              post={post}
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
          onClick={handleOpenModalComment}
          maxHeight="600px"
        />

        {/* interact and comments */}
        <Flex py={3} justify="space-between" align="center" px={2}>
          <Box
            as="span"
            color="GrayText"
            fontSize="14px"
            _hover={{
              cursor: likes[post?._id]?.length > 0 && "pointer",
              textDecoration: likes[post?._id]?.length > 0 && "underline",
            }}
            onClick={handleGetLike}
          >
            {likes[post?._id]?.length > 0
              ? formatNumber(likes[post._id].length) + " Like"
              : "Be the first to like this"}

            {/* <ModalUserLike
              isOpen={isOpenUserLiked}
              onClose={onCloseUserLiked}
              postLike={likes}
            /> */}
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
            {comments[post?._id]?.length + " Comments"}
          </Box>
        </Flex>

        <Flex justify="space-between" gap={2}>
          <Interact pos="relative" onClick={handleLike}>
            <FaHeart
              color={likeClick ? "#ff3040" : null}
              style={{ fontSize: "20px" }}
            />

            <Box
              as="span"
              color={likeClick ? "#ff3040" : null}
              fontWeight="bold"
            >
              Like
            </Box>
          </Interact>
          <Interact onClick={handleOpenModalComment}>
            <FaRegComment style={{ fontSize: "20px" }} />
            <Box as="span" fontWeight="bold">
              Comment
            </Box>
          </Interact>
        </Flex>

        {/* modal comment */}
      </Flex>
      {!offModal && (
        <ModalComment
          isOpenModal={isOpen}
          onCloseModal={handleCloseModalComment}
          post={post}
        />
      )}
    </Box>
  );
};

export default Post;
