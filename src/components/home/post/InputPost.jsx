import {
  InputGroup,
  Textarea,
  InputRightElement,
  Box,
  useOutsideClick,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react";
import IconCustom from "../../IconCustom";
import { IoMdSend } from "react-icons/io";

const InputPost = ({
  comment,
  top,
  send,
  width,
  left,
  mb,
  widthEmoji,
  value,
  handleEmojiClick,
  setValue,
}) => {
  // handle emoji
  const [openEmoji, setOpenEmoji] = useState(false);
  // const [value, setValue] = useState("");

  const outEmojiRef = useRef(null);
  useOutsideClick({
    ref: outEmojiRef,
    handler: () => setOpenEmoji(false),
  });

  // const handleEmojiClick = (emojiObject) => {
  //   const newEmoji = emojiObject.emoji;
  //   setValue((prevValue) => prevValue + newEmoji);
  // };

  return (
    <InputGroup>
      <Textarea
        placeholder={comment ? "Write a comment..." : "What's happenning ?"}
        w={width ? width : "100%"}
        pr="4.5rem"
        pos="relative"
        value={value}
        bgColor={comment && "#28353E"}
        onChange={(e) => setValue(e.target.value)}
        color="white"
        type="text"
        borderColor={comment ? "#28353E" : "itemColor"}
        _hover={{ outline: "none", borderColor: !comment && "itemColor" }}
        _focusVisible={{
          outline: "none",
          borderColor: !comment && "itemColor",
        }}
        resize="none"
        maxHeight="500px"
        h="auto"
        overflowY="auto"
        left={left}
        mb={mb}
        rounded="15px"
      />
      <InputRightElement width={widthEmoji ? widthEmoji : "4.5rem"} gap="10px">
        <IconCustom onClick={() => setOpenEmoji(!openEmoji)}>
          <GrEmoji />
        </IconCustom>
        {send && value && (
          <IconCustom>
            <IoMdSend />
          </IconCustom>
        )}
      </InputRightElement>
      {openEmoji && (
        <Box
          pos="absolute"
          top={top ? top : "45px"}
          right="2px"
          zIndex="2"
          ref={outEmojiRef}
        >
          <EmojiPicker onEmojiClick={handleEmojiClick} height="330px" />
        </Box>
      )}
    </InputGroup>
  );
};

export default InputPost;
