import { useEffect, useState } from "react";
import usePost from "../../zustands/usePost";
import axios from "axios";
import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";

const useGetPostHome = () => {
  const [loading, setLoading] = useState(false);
  const { posts, setPost } = usePost();
  const toast = useToast();

  useEffect(() => {
    const getPostHome = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${config.baseURL}/api/posts`, {
          withCredentials: true,
        });
        const data = await response.data.posts;
        console.log("data", data);
        setPost(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    getPostHome();
  }, [setPost]);
  return { loading, posts };
};

export default useGetPostHome;
