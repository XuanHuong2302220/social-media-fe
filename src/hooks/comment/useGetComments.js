import axios from "axios";
import config from "../../config/urlConfig";
import { useEffect, useState } from "react";
import usePost from "../../zustands/usePost";

const useGetComments = () => {
  const [loading, setLoading] = useState(false);
  const { post, comments, setComments } = usePost();
  // console.log("post", post);
  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/post/${post?._id}/comment`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
        setComments(post?._id, data);
      } catch (error) {
        console.log("error in get comments", error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    if (post?._id) {
      getComments();
    }
  }, [post?._id, setComments]);
  return { comments, loading };
};

export default useGetComments;
