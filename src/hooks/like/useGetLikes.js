import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config/urlConfig";
import usePost from "../../zustands/usePost";

const useGetLikes = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { post, likes, setLike } = usePost();

  useEffect(() => {
    const getLikes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/post/${post?._id}/like`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
        setLike(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    if (post?._id) {
      getLikes();
    }
  }, [post?._id, setLike]);
  return { likes, loading };
};

export default useGetLikes;
