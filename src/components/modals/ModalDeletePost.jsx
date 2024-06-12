import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import useDeletePost from "../../hooks/post/useDeletePost";
import { deleteObject, getStorage } from "firebase/storage";
import app from "../../firebase/config";

const ModalDeletePost = ({ isOpen, onClose, postId, postImg }) => {
  //get hook to delete post
  const { loading, deletePost } = useDeletePost();

  //handleDeletePost
  const handleDeletePost = async () => {
    await deletePost(postId);
    window.location.reload();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="itemColor"
        color="white"
        mt="100px"
        position="fixed"
      >
        <ModalHeader>Delete Post?</ModalHeader>
        <ModalBody>
          <Box>Are you sure delete this post?</Box>
        </ModalBody>
        <ModalFooter gap="10px">
          <Button bgColor="primaryColor" color="white" onClick={onClose}>
            Cancel
          </Button>
          <Button bgColor="red" color="white" onClick={handleDeletePost}>
            {loading ? <Spinner /> : "Delete"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDeletePost;
