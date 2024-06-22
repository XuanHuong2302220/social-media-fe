import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import FollowUser from "../users/FollowUser";
import useGetLikes from "../../hooks/like/useGetLikes";

const ModalUserLike = ({ isOpen, onClose }) => {
  const { likes, loading } = useGetLikes();
  const postLike = likes;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="itemColor"
        color="white"
        mt="100px"
        rounded="15px"
        maxH="500px"
        overflowY="auto"
        alignItems={loading && "center"}
        justifyContent={loading && "center"}
      >
        <ModalHeader textAlign="center">Likes</ModalHeader>
        <ModalCloseButton />
        {loading ? (
          <Spinner bgColor="primaryColor" />
        ) : (
          <ModalBody>
            {postLike.map((like) => {
              return (
                <FollowUser
                  key={like?._id}
                  follower={like}
                  fullname={like.fullname}
                  avatar={like.profilePicture}
                />
              );
            })}
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalUserLike;
