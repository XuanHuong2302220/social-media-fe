import { useParams } from "react-router-dom";
import useFollow from "../../zustands/useFollow";
import { useEffect } from "react";
import config from "../../config/urlConfig";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/authContext";

const useGetFollower = () => {
  const { _id } = useParams();
  const { authUser } = useAuthContext();
  const { follower, setFollower } = useFollow();
  const toast = useToast();

  useEffect(() => {
    const getFollower = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/follow/${_id ? _id : authUser._id}/follower`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data.followerUsers;
        setFollower(data);
      } catch (error) {
        console.log(error);

        toast({
          title: "Error",
          description: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    if (_id) getFollower();
  }, [_id, setFollower]);
  return { follower };
};

export default useGetFollower;
