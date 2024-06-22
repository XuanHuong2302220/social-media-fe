// import { useEffect, useState } from "react";
// import axios from "axios";
// import config from "../../config/urlConfig";
// import { useToast } from "@chakra-ui/react";
// import usePostHome from "../../zustands/usePostHome";

// const useGetPostHome = () => {
//   const [loading, setLoading] = useState(false);
//   const { postHome: posts, setPostHome } = usePostHome();
//   const toast = useToast();

//   useEffect(() => {
//     const getPostHome = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`${config.baseURL}/api/posts`, {
//           withCredentials: true,
//         });
//         const data = await response.data.posts;
//         setPostHome(data);
//       } catch (error) {
//         toast({
//           title: "Error",
//           description: error.response.data,
//           status: "error",
//           duration: 9000,
//           isClosable: true,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
//     getPostHome();
//   }, []);
//   return { loading, posts };
// };

// export default useGetPostHome;

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";
import usePostHome from "../../zustands/usePostHome";

const useGetPostHome = () => {
  const [loading, setLoading] = useState(false);
  const { postHome: posts, setPostHome } = usePostHome();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getPostHome = async (page) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/posts?page=${page}`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data.posts;
        console.log("data", data);
        setPostHome(data);
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data || "An error occurred",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    if (page) {
      getPostHome(page);
    }
  }, [page, toast, setPostHome]);

  return { loading, posts, hasMore, setPage };
};

export default useGetPostHome;
