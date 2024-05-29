import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import IconCustom from "../../IconCustom";
import { BsThreeDots } from "react-icons/bs";
import Interact from "./Interact";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import banner from "../../../assets/image/jiwon.jpg";
import ModalComment from "./comment/ModalComment";

const limitWords = (content, limit) => {
  const words = content.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + " ";
  } else return words;
};

const Post = ({ width, offModal }) => {
  const [seemore, setSeemore] = useState(true);
  const [content, setContent] = useState("");
  const [like, setLike] = useState(true);
  const [quantityLike, setQuantityLike] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setContent(`Mới đây, Lope Phạm - người đã đồng hành cùng MCK trong album '99%' -
    đã liên tục đăng những bài viết hàm ý bức xúc hướng đến MCK. Cụ thể,
    Lope Phạm đã đăng một story với dòng chữ "Không trả lời tất cả câu
    hỏi liên quan đến Nghiêm Vũ Hoàng Long, MCK hay tất cả vấn đề liên
    quan đến Album". Và ngay sau đó là bài viết với caption đầy ẩn ý: "i
    dont need another fake friend, brodie". quan đến Album". Và ngay sau
    đó là bài viết với caption đầy ẩn ý: "i dont need another fake
    friend, brodie". quan đến Album". Và ngay sau đó là bài viết với
    caption đầy ẩn ý: "i dont need another fake friend, brodie".
    `);
  }, []);

  //format number
  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
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
            <Avatar />
            <Box>
              <Text fontWeight="bold">Ngo Xuan Huong</Text>
              <Text color="GrayText" fontSize="12px">
                five minutes ago
              </Text>
            </Box>
          </Flex>
          <IconCustom>
            <BsThreeDots />
          </IconCustom>
        </Flex>

        {/* content */}
        <Text fontSize="14px">
          {seemore ? limitWords(content, 150) : content}
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
          src={banner}
          mt={3}
          cursor="pointer"
          h="auto"
          onClick={onOpen}
        />

        {/* interact and comments */}
        <Flex py={3} justify="space-between" align="center">
          <Box
            as="span"
            color="GrayText"
            fontSize="14px"
            _hover={{
              cursor: quantityLike > 0 && "pointer",
              textDecoration: quantityLike > 0 && "underline",
            }}
          >
            {quantityLike > 0
              ? formatNumber(quantityLike) + "Like"
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
            1k Comments
          </Box>
        </Flex>

        <Flex justify="space-between" gap={2}>
          <Interact pos="relative" onClick={() => setLike(!like)}>
            <FaHeart color={like && "#ff3040"} style={{ fontSize: "20px" }} />

            <Box as="span" color={like && "#ff3040"} fontWeight="bold">
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
        <ModalComment isOpenModal={isOpen} onCloseModal={onClose} />
      )}
    </Box>
  );
};

export default Post;
