import { Avatar, Box, Flex, AvatarBadge, Text, Input } from "@chakra-ui/react";
import { RiSubtractFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import IconCustom from "../../IconCustom";
import Message from "./Message";
import { IoMdSend } from "react-icons/io";

const MiniMessageBox = ({ setActiveMess }) => {
  return (
    <Flex
      pos="relative"
      flexDirection="column"
      width="358px"
      height="400px"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
      bgColor="#1A2730"
      bottom="0"
      rounded="10px"
      overflowX="hidden"
    >
      {/* infor user */}
      <Flex
        align="center"
        justify="space-between"
        bgColor="bgColor"
        w="100%"
        px={3}
        py={2}
      >
        <Flex align="center" gap="10px" maxW="60%" h="15%">
          <Avatar size="sm">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Text color="white" isTruncated fontWeight="bold">
            Ngo Xuan Huong
          </Text>
        </Flex>
        <Flex gap="10px">
          <IconCustom>
            <RiSubtractFill />
          </IconCustom>

          <IconCustom onClick={() => setActiveMess(false)}>
            <MdClose />
          </IconCustom>
        </Flex>
      </Flex>

      {/* message */}
      <Flex direction="column" overflowY="auto" flex="1">
        <Flex direction="column" justify="flex-end" flex="1">
          <Message justify="flex-start">
            Hello wtf thissssssssssssssssssssssssssssssssssssssss
          </Message>
          <Message justify="flex-end">Hello wtf</Message>
          <Message justify="flex-end">Hello wtf</Message>
          <Message justify="flex-end">Hello wtf</Message>
          <Message justify="flex-end">Hello wtf</Message>
          <Message justify="flex-end">Hello wtf</Message>
        </Flex>
      </Flex>
      {/* input send message */}
      <Flex p={2} align="center" gap="10px">
        <Input
          _placeholder={{ color: "gray" }}
          borderColor={"#28353E"}
          bgColor="#28353E"
          rounded="15px"
          color="white"
        />
        <IconCustom>
          <IoMdSend />
        </IconCustom>
      </Flex>
    </Flex>
  );
};

export default MiniMessageBox;
