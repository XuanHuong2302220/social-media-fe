import { Box, Flex } from "@chakra-ui/react";
import MyProfile from "../components/home/profile/MyProfile";
import Suggestions from "../components/home/Suggestions";
import CreatePost from "../components/home/post/CreatePost";
import Post from "../components/home/post/Post";
import UserOnline from "../components/home/UserOnline";
import Navbar from "../components/home/navbar/Navbar";

const Home = () => {
  return (
    <Box w={{ sm: "30%", md: "60%", lg: "100%" }} h="auto" bgColor="bgColor">
      <Navbar />
      <Flex pt="70px" px={6} gap="15px">
        <Flex direction="column" h="100%" pos="fixed">
          <MyProfile />
          <Suggestions />
        </Flex>

        <Flex
          direction="column"
          w={{ sm: "100%", md: "100%", lg: "70%" }}
          ml="370px"
        >
          <CreatePost />
          <Post />
          <Post />
        </Flex>

        <Flex
          direction="column"
          pos="fixed"
          color="white"
          right="31px"
          width={{ sm: "0", md: "0", lg: "23%" }}
          height="100%"
        >
          <UserOnline />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
