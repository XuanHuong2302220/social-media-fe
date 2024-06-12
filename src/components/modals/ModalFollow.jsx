import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import FollowUser from "../users/FollowUser";
const ModalFollow = ({ isOpen, onClose, follower }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="itemColor"
          color="white"
          mt="100px"
          rounded="15px"
          maxH="500px"
          overflowY="auto"
        >
          <ModalHeader textAlign="center">
            {follower ? "Followers" : "Followings"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement>
                <IoIosSearch />
              </InputLeftElement>
              <Input
                placeholder="Search"
                type="text"
                borderColor="itemColor"
                _hover={{ borderColor: "itemColor" }}
                _focusVisible={{ borderColor: "itemColor" }}
              />
            </InputGroup>
            {/* {!follower ? <FollowUser /> : <FollowUser follower />} */}
            {follower ? <FollowUser follower /> : <FollowUser />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalFollow;
