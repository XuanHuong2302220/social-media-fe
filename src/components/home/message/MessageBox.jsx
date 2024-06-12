import { Flex, Text, Box, Input } from "@chakra-ui/react";
import { MdZoomOutMap } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import SearchUser from "../../SearchUser";
import ResultBox from "../../ResultBox";
const MessageBox = ({
  focusMess,
  setFocusMess,
  setActiveMessBoxes,
  setActive,
  setActiveHome,
  activeMessBoxes,
}) => {
  return (
    <>
      <ResultBox maxH="600px">
        <Flex
          direction="column"
          px={3}
          gap="10px"
          overflowY="scroll"
          maxH="500px"
          overflowX="hidden"
          width="100%"
        >
          <Flex align="center" justify="space-between">
            <Text fontSize="25px" fontWeight="bold">
              Message
            </Text>
            <Flex fontSize="25px" gap="10px" cursor="pointer">
              <Box color="iconColor" _hover={{ color: "white" }}>
                <MdZoomOutMap />
              </Box>
              <Box color="iconColor" _hover={{ color: "white" }}>
                <HiMiniPencilSquare />
              </Box>
            </Flex>
          </Flex>
          <Flex align="center" justify="center" w="100%" p={2} gap="5px">
            {focusMess && (
              <Box
                fontSize="25px"
                p={2}
                rounded="100%"
                alignItems="center"
                cursor="pointer"
                _hover={{ bgColor: "iconColor" }}
                onClick={() => setFocusMess(false)}
              >
                <IoIosArrowRoundBack />
              </Box>
            )}
            <Input
              p={3}
              bgColor="#28353E"
              color="#B8CBD9"
              borderColor="#28353E"
              _hover={{ outline: "none" }}
              borderRadius="15px"
              placeholder="Search"
              onFocus={() => setFocusMess(true)}
            />
          </Flex>
          {focusMess ? (
            <Box maxH="500px" height="500px">
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
              <SearchUser fullname="Ngo Xuan Huong" searchMess />
            </Box>
          ) : (
            <>
              {<SearchUser /> ? (
                <>
                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                    isRead
                    onClick={() => {
                      setActiveMessBoxes((prev) => [...prev, prev.length]);

                      setActive(false);
                      setActiveHome(true);
                    }}
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                    isRead
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                    isRead
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                    isRead
                  />

                  <SearchUser
                    mess
                    fullname="Ngo Xuan Huong"
                    message="i'm fine thanks ok nha neu ban ranh thi toi nha toi choi"
                  />
                </>
              ) : (
                <Box textAlign="center" pb={5}>
                  {" "}
                  No Conversation created
                </Box>
              )}
            </>
          )}
        </Flex>

        {!focusMess && (
          <>
            <Box
              w="100%"
              textAlign="center"
              h="30px"
              color="primaryColor"
              fontWeight="bold"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              See all in the chat room
            </Box>
          </>
        )}
      </ResultBox>
    </>
  );
};

export default MessageBox;
