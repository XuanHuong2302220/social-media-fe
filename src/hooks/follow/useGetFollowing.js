import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import useFollow from "../../zustands/useFollow";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const useGetFollowing = () => {
  const toast = useToast();
  const { setFollowing, following } = useFollow();

  const { _id } = useParams();

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/follow/${_id}/following`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data.followingUsers;
        setFollowing(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    if (_id) getFollowing();
  }, [_id, setFollowing]);

  return { following };
};

export default useGetFollowing;
