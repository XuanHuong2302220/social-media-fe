import { Box, Flex, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config/urlConfig";
import { useAuthContext } from "../contexts/authContext";

const VerifiedEmail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const toast = useToast();

  useEffect(() => {
    const verifyEmail = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/auth/${params.id}/verify/${params.token}`
        );
        const data = await response.data;
        console.log(data);
        setAuthUser(data);
        localStorage.setItem("authUser", JSON.stringify(data));
      } catch (error) {
        toast({
          title: error.response.data.message,
          status: "error",
          duration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [params.id, params.token]);
  return (
    <Flex fontSize="100px" w="100%" h="100vh" justify="center" align="center">
      {loading ? <Spinner /> : "Hello"}
    </Flex>
  );
};

export default VerifiedEmail;
