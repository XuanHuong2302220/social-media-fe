import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NonPost from "../components/home/profile/NonPost";
import Post from "../components/home/post/Post";
import { useAuthContext } from "../contexts/authContext";
import useGetFollowing from "../hooks/follow/useGetFollowing";
import useGetFollower from "../hooks/follow/useGetFollower";
import useGetPosts from "../hooks/post/useGetPosts";
import ModalFollow from "../components/modals/ModalFollow";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [followingActive, setFollowingActive] = useState(false);
  const [followerActive, setFollowerActive] = useState(false);

  const { authUser } = useAuthContext();

  const handleFollowing = () => {
    setFollowerActive(false);
    setFollowingActive(true);
    onOpen();
  };

  const handleFollower = () => {
    setFollowingActive(false);
    setFollowerActive(true);
    onOpen();
  };
  const { following } = useGetFollowing();
  const { follower } = useGetFollower();
  const { loading, posts } = useGetPosts();
  console.log("posts", posts);

  return (
    <Box>
      <Outlet />
      <Flex
        w="100%"
        pt="70px"
        bgColor="bgColor"
        h="100vh"
        direction="column"
        align="center"
        overflowY="auto"
      >
        <Flex color="white" justify="center" w="100%" gap="80px">
          <Avatar
            size="2xl"
            src={authUser.profilePicture ? authUser.profilePicture : null}
          />
          <Flex direction="column " align="start" gap="10px">
            <Flex align="center" justify="space-between" w="400px">
              <Text fontSize="20px" fontWeight="bold" textAlign="start">
                {authUser?.fullname}
              </Text>
              <Button
                bgColor="primaryColor"
                color="white"
                _hover={{ opacity: "0.5" }}
              >
                Edit Profile
              </Button>
            </Flex>
            <Text maxWidth="400px" fontSize="13px">
              {authUser?.bio}
            </Text>

            <Flex gap="15px">
              <Box as="span">0 posts</Box>
              <Box as="span" cursor="pointer" onClick={handleFollower}>
                {follower.length} follower
              </Box>
              <Box as="span" cursor="pointer" onClick={handleFollowing}>
                {following.length} following
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Divider w="40%" textAlign="center" mt="20px" opacity="0.3" />
        <Flex
          direction="column"
          color="white"
          align="center"
          height="auto"
          maxHeight="100vh"
          width={posts.length > 1 && "55%"}
        >
          {posts.length < 1 && <NonPost />}
          {posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </Flex>
      </Flex>
      {followingActive && <ModalFollow isOpen={isOpen} onClose={onClose} />}
      {followerActive && (
        <ModalFollow isOpen={isOpen} onClose={onClose} follower />
      )}
    </Box>
  );
};

export default Profile;
