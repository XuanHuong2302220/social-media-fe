import { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import bgprofile from "../../../assets/image/bgprofile.jpeg";
import { Link } from "react-router-dom";
import ModalFollow from "../../modals/ModalFollow";
import { useAuthContext } from "../../../contexts/authContext";
import useGetFollowing from "../../../hooks/follow/useGetFollowing";
import useGetFollower from "../../../hooks/follow/useGetFollower";

const MyProfile = () => {
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

  console.log("following", following);
  console.log("follower", follower);

  return (
    <Flex
      cursor="pointer"
      direction="column"
      bgColor="itemColor"
      w="350px"
      rounded="15px"
      h="auto"
      pos="relative"
      color="white"
      mb="10px"
    >
      <Link to={`/${authUser._id}`}>
        <Image
          src={bgprofile}
          h="110px"
          borderTopRightRadius="15px"
          borderTopLeftRadius="15px"
          width="100%"
        />

        <Box w="100%" textAlign="center" pos="absolute" top="25%">
          <Avatar src={authUser?.profilePicture || null} />
        </Box>
        <Flex direction="column" p={3} gap="5px" mt="15px">
          <Box w="100%" textAlign="center" fontWeight="600" fontSize="18px">
            {authUser?.fullname}
          </Box>
          <Box w="100%" textAlign="center" fontSize="14px" px="20px">
            {authUser?.bio ||
              "🖐️ This is my profile welcome every body hehehehe, i love you💓"}
          </Box>
        </Flex>
      </Link>
      <Divider opacity="0.2" />
      <Flex align="center" justify="space-around" p={3}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={handleFollowing}
        >
          <Text fontWeight="bold">{following?.length}</Text>
          <Text fontSize="14px" color="GrayText">
            Followings
          </Text>
        </Flex>
        <Divider orientation="vertical" height="50px" opacity="0.2" />
        <Flex
          direction="column"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={handleFollower}
        >
          <Text fontWeight="bold">{follower?.length}</Text>

          <Text fontSize="14px" color="GrayText">
            Followers
          </Text>
        </Flex>
      </Flex>
      <Divider opacity="0.2" />
      <Link to={`/${authUser._id}`}>
        <Box
          w="100%"
          textAlign="center"
          p={4}
          color="primaryColor"
          fontWeight="bold"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          My Profile
        </Box>
      </Link>
      {followingActive && <ModalFollow isOpen={isOpen} onClose={onClose} />}
      {followerActive && (
        <ModalFollow isOpen={isOpen} onClose={onClose} follower />
      )}
    </Flex>
  );
};

export default MyProfile;
