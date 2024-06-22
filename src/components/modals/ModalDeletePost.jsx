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
import usePostHome from "../../zustands/usePostHome";

const ModalDeletePost = ({ isOpen, onClose, postId }) => {
  //get hook to delete post
  const { loading, deletePost } = useDeletePost();
  const { clearPostHome } = usePostHome();

  //handleDeletePost
  const handleDeletePost = async () => {
    clearPostHome({ _id: postId });
    await deletePost(postId);
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
