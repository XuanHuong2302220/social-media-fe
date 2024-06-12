import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/authContext";
import axios from "axios";
import useLikePost from "../../zustands/useLikePost";
import { useEffect } from "react";

const useGetLike = (postId) => {
  const toast = useToast();
  const { authUser } = useAuthContext();
  const id = authUser._id;
  const { likes, setLike } = useLikePost();
  useEffect(() => {
    const getLike = async () => {
      try {
        const response = await axios.get(
          `/api/post/${postId}/like`,
          {
            id,
          },
          {
            withCredentials: true,
          }
        );
        const data = response.data;
        setLike(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
    getLike();
  }, [setLike]);
  return { likes };
};

export default useGetLike;
