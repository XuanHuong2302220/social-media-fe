import {
  InputGroup,
  Textarea,
  InputRightElement,
  Box,
  useOutsideClick,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react";
import IconCustom from "../../IconCustom";
import { IoMdSend } from "react-icons/io";
import useCreateComment from "../../../hooks/comment/useCreateComment";
import usePost from "../../../zustands/usePost";
import useCreateReplyComment from "../../../hooks/replyComment/useCreateReplyComment";

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
  right,
  reply,
}) => {
  // handle emoji
  const [openEmoji, setOpenEmoji] = useState(false);
  // const [value, setValue] = useState("");

  const outEmojiRef = useRef(null);
  useOutsideClick({
    ref: outEmojiRef,
    handler: () => setOpenEmoji(false),
  });

  //handle send comment
  const { createComment, loading } = useCreateComment();

  const handleCreateComment = async (e) => {
    e.preventDefault();
    await createComment(value);
    setValue("");
  };

  //handle send reply
  const { createReplyComment, loading: loadingReply } = useCreateReplyComment();
  const handleSendReply = async () => {
    await createReplyComment(value);
    setValue("");
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await createComment(value);
      setValue("");
    }
  };

  return (
    <InputGroup zIndex="1">
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
        onKeyDown={handleKeyDown}
      />
      <InputRightElement width={widthEmoji ? widthEmoji : "4.5rem"} gap="10px">
        <IconCustom onClick={() => setOpenEmoji(!openEmoji)}>
          <GrEmoji />
        </IconCustom>
        {send && value && (
          <IconCustom onClick={reply ? handleSendReply : handleCreateComment}>
            {loading || loadingReply ? <Spinner /> : <IoMdSend />}
          </IconCustom>
        )}
      </InputRightElement>
      {openEmoji && (
        <Box
          pos="absolute"
          top={top ? top : "45px"}
          right={right ? right : "2px"}
          zIndex="9999"
          ref={outEmojiRef}
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            height="330px"
            theme="dark"
          />
        </Box>
      )}
    </InputGroup>
  );
};

export default InputPost;
