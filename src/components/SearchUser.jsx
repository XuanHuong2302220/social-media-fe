import { useState } from "react";
import { Flex, Avatar, Text, Button, Box } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import IconCustom from "./IconCustom";

const SearchUser = ({
  name,
  src,
  fullname,
  searchPost,
  mess,
  message,
  searchMess,
  isRead,
  follow,
  onClick,
}) => {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <Flex
      align="center"
      width="100%"
      p={2}
      justify="space-between"
      cursor="pointer"
      _hover={{
        bgColor: "#3a3b3c",
        borderRadius: "10px",
      }}
      onClick={onClick}
    >
      <Flex
        align="center"
        gap="10px"
        justify="space-between"
        width={mess ? "90%" : "100%"}
      >
        {(searchPost || searchMess || follow) && (
          <Flex align="center" gap={"10px"}>
            <Avatar
              size="sm"
              name={name}
              src={src}
              boxSize={mess ? "55px" : "40px"}
            />{" "}
            <Text fontWeight="bold">{fullname}</Text>
          </Flex>
        )}
        {mess && (
          <>
            <Avatar
              name={name}
              src={src}
              size="md"
              boxSize={mess ? "55px" : "40px"}
            />
            <Flex flexDirection="column" width={{ base: "150px", lg: "300px" }}>
              <Text fontWeight="bold">{fullname}</Text>
              <Text
                isTruncated
                fontWeight="bold"
                color={isRead ? "GrayText" : "white"}
              >
                {message}
              </Text>
            </Flex>
          </>
        )}
        {follow && (
          <>
            <Button
              _hover={{ bgColor: !isFollow && "transparent" }}
              rounded="20px"
              bgColor={!isFollow ? "primaryColor" : "transparent"}
              color="white"
              onClick={() => setIsFollow(true)}
            >
              {isFollow ? <FaCheck /> : "Follow"}
            </Button>
          </>
        )}
      </Flex>
      {searchPost && (
        <Flex
          color="iconColor"
          align="center"
          justify="center"
          boxSize="30px"
          textAlign="center"
          _hover={{
            rounded: "100%",
            color: "white",
            bgColor: "gray.600",
          }}
        >
          <MdClose />
        </Flex>
      )}
    </Flex>
  );
};

export default SearchUser;
