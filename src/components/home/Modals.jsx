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
  Input,
  Image,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import IconCustom from "../IconCustom";
import { FaImages } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import ButtonCustom from "../Button";
import InputPost from "./post/InputPost";
import app from "./../../firebase/config";
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import useCreatePost from "../../hooks/post/useCreatePost";
import ModalCreatePost from "../modals/ModalCreatePost";
import useUpdatePost from "../../hooks/post/useUpdatePost";
import checkImage from "../../firebase/checkImage";
import { IoIosClose } from "react-icons/io";

const Modals = ({
  isOpen,
  onClose,
  valueUpdate,
  imageUpdate,
  update,
  postId,
}) => {
  // handle input file
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  //get hook of create post
  const { loading, createPost } = useCreatePost();
  const [value, setValue] = useState("");

  //handle emoji click
  const handleEmojiClick = (emojiObject) => {
    const newEmoji = emojiObject.emoji;
    setValue((prevValue) => prevValue + newEmoji);
  };

  //handle select image
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImage(file);
      setImageURL(objectURL);
    }
  };

  // handle create post
  const handlePost = async () => {
    let downloadURL;
    if (image) {
      try {
        const existsImage = await checkImage(image);
        if (!existsImage) {
          const storage = getStorage(app);
          const storageRef = ref(storage, `images/${image.name}`);
          await uploadBytes(storageRef, image);
          downloadURL = await getDownloadURL(storageRef);
        }
      } catch (error) {
        console.log(error);
      }
    }

    await createPost(value, downloadURL);

    setValue("");
    setImage("");
    setImageURL("");
    window.location.reload();
  };

  //handle change image
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file !== image) {
      setImage("");
      URL.revokeObjectURL(imageURL);
      setImageURL("");
      setImage(file);
      const objectURL = URL.createObjectURL(file);
      setImageURL(objectURL);
    }
  };

  useEffect(() => {
    if (valueUpdate) {
      setValue(valueUpdate);
    }

    if (imageUpdate) {
      setImage(imageUpdate);
      setImageURL("");
      setImageURL(imageUpdate);
    }
  }, [valueUpdate, imageUpdate]);

  useEffect(() => {
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  const handleOnclose = () => {
    if (!value && !image && !imageURL) {
      onClose();
    } else {
      onOpenDelete();
    }
  };

  //get hook of update post
  const { loading: loadingUpdate, updatePost } = useUpdatePost();

  //handle update post
  const handleUpdatePost = async (e) => {
    let downloadURL;
    if (imageURL !== imageUpdate) {
      try {
        const existsImage = await checkImage(image);
        console.log("existsImage", existsImage);
        if (!existsImage) {
          const storage = getStorage(app);
          const storageRef = ref(storage, `images/${image.name}`);
          await uploadBytes(storageRef, image);
          downloadURL = await getDownloadURL(storageRef);
          console.log("saved image");
        } else {
          downloadURL = existsImage;
          console.log("already exist image");
          console.log("imageUpdate", imageUpdate);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      downloadURL = imageUpdate;
    }
    await updatePost(postId, value, downloadURL);
    setValue("");
    setImage("");
    setImageURL("");
    window.location.reload();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleOnclose}>
      <ModalOverlay />
      <ModalContent bgColor="itemColor" mt="100px" rounded="15px">
        <ModalHeader>
          <Box color="white" textAlign="center">
            {update ? "Update Post" : "Create Post"}
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
          <InputPost
            value={value}
            handleEmojiClick={handleEmojiClick}
            setValue={setValue}
          />
          <Flex
            border="1px solid gray"
            w="100%"
            h="300px"
            rounded="15px"
            justify="center"
            align="center"
            mt={1}
            mb={2}
            pos="relative"
          >
            <Flex
              onClick={handleInputClick}
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
              {!image ? (
                <>
                  <Box>
                    <IconCustom color="gray">
                      <FaImages />
                    </IconCustom>
                  </Box>

                  <Text>Add images</Text>
                  <Text>or drag and drop</Text>
                </>
              ) : (
                <Image
                  src={imageURL}
                  h="100%"
                  w="100%"
                  rounded="15px"
                  onClick={handleChangeImage}
                  cursor="pointer"
                />
              )}
              <Box
                pos="absolute"
                top="10px"
                right="10px"
                opacity={imageURL ? 1 : 0}
              >
                <IconCustom
                  fontSize="30px"
                  color="GrayText"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImage("");
                    setImageURL("");
                  }}
                >
                  <IoIosClose />
                </IconCustom>
              </Box>
            </Flex>

            <Input
              type="file"
              display="none"
              ref={inputRef}
              onChange={handleSelectImage}
            />
          </Flex>

          <ModalCreatePost
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            setImage={setImage}
            setImageURL={setImageURL}
            setValue={setValue}
            onCloseModal={onClose}
          />

          <ButtonCustom
            width="100%"
            borderRadius="15px"
            bgColor="primaryColor"
            color="white"
            disabled={(image === null && value === "") || loading}
            mb={2}
            onClick={update ? handleUpdatePost : handlePost}
          >
            {(loading || loadingUpdate) && <Spinner />}
            {update ? "Update" : "Post"}
          </ButtonCustom>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Modals;
