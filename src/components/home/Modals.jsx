import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Box,
  Text,
  useOutsideClick,
  Input,
  Image,
} from "@chakra-ui/react";
import IconCustom from "../IconCustom";
import { FaImages } from "react-icons/fa";
import { useState, useRef } from "react";
import ButtonCustom from "../Button";
import InputPost from "./post/InputPost";

const Modals = ({ isOpen, onClose }) => {
  // handle input file
  const inputRef = useRef(null);
  const [image, setimage] = useState("");
  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setimage(file);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="itemColor" mt="100px" rounded="15px">
        <ModalHeader>
          <Box color="white" textAlign="center">
            Create Post
          </Box>
        </ModalHeader>
        <ModalCloseButton
          color="white"
          bgColor="gray"
          _hover={{ opacity: "0.5" }}
          rounded="100%"
          mt={1}
        />
        <ModalBody>
          <InputPost />
          <Flex
            border="1px solid gray"
            w="100%"
            h="300px"
            rounded="15px"
            justify="center"
            align="center"
            mt={1}
            mb={2}
          >
            <Flex
              onClick={!image && handleInputClick}
              direction="column"
              color="white"
              justify="center"
              align="center"
              bgColor="gray.600"
              h={image ? "100%" : "95%"}
              w={image ? "100%" : "95%"}
              rounded="15px"
              _hover={{ cursor: !image && "pointer", opacity: !image && "0.8" }}
            >
              {!image && (
                <>
                  <Box>
                    <IconCustom color="gray">
                      <FaImages />
                    </IconCustom>
                  </Box>

                  <Text>Add images</Text>
                  <Text>or drag and drop</Text>
                </>
              )}
              {image && (
                <Image
                  src={URL.createObjectURL(image)}
                  h="100%"
                  w="100%"
                  rounded="15px"
                />
              )}
            </Flex>

            <Input
              type="file"
              display="none"
              ref={inputRef}
              onChange={handleImageChange}
            />
          </Flex>

          <ButtonCustom
            width="100%"
            borderRadius="15px"
            bgColor="primaryColor"
            color="white"
            disable={image === "" ? true : false}
            mb={2}
          >
            Post
          </ButtonCustom>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Modals;
