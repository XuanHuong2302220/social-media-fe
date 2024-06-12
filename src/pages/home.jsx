import { Box, Flex } from "@chakra-ui/react";
import MyProfile from "../components/home/profile/MyProfile";
import Suggestions from "../components/home/Suggestions";
import CreatePost from "../components/home/post/CreatePost";
import Post from "../components/home/post/Post";
import UserOnline from "../components/home/UserOnline";
import useGetPostHome from "../hooks/post/useGetPostHome";

const Home = () => {
  const { loading, posts } = useGetPostHome();

  console.log("posts", posts);

  return (
    <Box
      w="100%"
      h="100vh"
      bgColor="bgColor"
      overflowY={posts.length < 1 ? "hidden" : "auto"}
      maxH={posts.length < 1 && "100vh"}
    >
      <Flex pt="70px" px={6} gap="15px">
        <Flex direction="column" h="100%" pos="fixed">
          <MyProfile />
          <Suggestions />
        </Flex>

        <Flex direction="column" ml={{ lg: "370px" }} w="70%">
          <CreatePost />

          {posts.length < 1 && !loading ? (
            <Flex
              w="100%"
              h="100vh"
              bgColor="bgColor"
              overflowY="hidden"
              color="GrayText"
              p={100}
              fontSize="30px"
              fontWeight="bold"
            >
              Let's make friend to watch more post{" "}
            </Flex>
          ) : (
            posts.map((item) => {
              return <Post key={item._id} post={item} />;
            })
          )}
        </Flex>

        <Flex
          direction="column"
          pos="fixed"
          color="white"
          right="31px"
          width="23%"
          height="100%"
        >
          <UserOnline />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
