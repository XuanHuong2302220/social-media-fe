import { Button, Flex, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ResultBox from "../../ResultBox";
import Notify from "./Notify";

const NotificationBox = () => {
  const [activeAll, setActiveAll] = useState(false);
  const [activeUnread, setActiveUnread] = useState(false);

  useEffect(() => {
    setActiveAll(true);
  }, []);
  return (
    <ResultBox overflowY="scroll">
      <Flex flexDirection="column" p={2} gap="10px">
        <Text fontSize="25px" fontWeight="bold">
          Notification
        </Text>
        <Flex gap="10px">
          <Button
            rounded="30px"
            color="white"
            onClick={() => {
              setActiveAll(!activeAll);
              setActiveUnread(false);
            }}
            bgColor={activeAll ? "primaryColor" : "transparent"}
          >
            All
          </Button>
          <Button
            rounded="30px"
            color="white"
            onClick={() => {
              setActiveUnread(!activeUnread);
              setActiveAll(false);
            }}
            bgColor={activeUnread ? "primaryColor" : "transparent"}
          >
            Unread
          </Button>
        </Flex>

        {activeAll && (
          <>
            <Flex justify="space-between" align="center">
              <Text>Before</Text>
              <Button bgColor="transparent">
                <Text color="primaryColor">See all</Text>
              </Button>
            </Flex>

            <>
              <Notify fullname="Nguyen Vu Mai Phuong" like isRead />
              <Notify fullname="Nguyen Vu Mai Phuong" love isRead />
              <Notify fullname="Nguyen Vu Mai Phuong" haha />
              <Notify fullname="Nguyen Vu Mai Phuong" sad isRead />
              <Notify fullname="Nguyen Vu Mai Phuong" angry isRead />
              <Notify fullname="Nguyen Vu Mai Phuong" comment />
              <Notify fullname="Nguyen Vu Mai Phuong" reply isRead />
              <Notify fullname="Nguyen Vu Mai Phuong" follow />
            </>

            {/* <Box p={5} textAlign="center">
                No Notification
              </Box>
             */}
          </>
        )}

        {activeUnread && (
          <Box maxH="500px" height="auto">
            <Notify fullname="Nguyen Vu Mai Phuong" haha />
            <Notify fullname="Nguyen Vu Mai Phuong" comment />
            <Notify fullname="Nguyen Vu Mai Phuong" follow />
          </Box>
        )}
      </Flex>
    </ResultBox>
  );
};

export default NotificationBox;
