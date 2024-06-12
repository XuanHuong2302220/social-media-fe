import { useEffect, useState } from "react";
import usePost from "../../zustands/usePost";
import axios from "axios";
import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const useGetPosts = () => {
  const { posts, setPost } = usePost();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${config.baseURL}/api/posts/${id}`, {
          withCredentials: true,
        });
        const data = await response.data.posts;
        setPost(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [id]);
  return { loading, posts };
};

export default useGetPosts;
