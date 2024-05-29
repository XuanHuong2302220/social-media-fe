import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  Box,
  FormControl,
  Text,
  Flex,
  FormLabel,
  Image,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Logo from "../../components/Logo";
import ButtonCustom from "../../components/Button";
import banner from "../../assets/image/banner.png";
import InputCustom from "../../components/InputCustom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [forgotPassword, setForgetPassword] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <Box w="100%" h="100vh" bgColor="#18181A">
      <Flex align="center" justifyContent="center" h="100%">
        <Image
          src={banner}
          alt="background"
          boxSize={{ base: 0, lg: "400px" }}
        />

        <Box width="350px" p={5} h="350px">
          <Logo />
          {!forgotPassword ? (
            <form onSubmit={handleSubmitLogin}>
              <FormControl py={5}>
                <FormLabel color="white">username</FormLabel>
                <InputCustom
                  type="text"
                  placeholder="username or email..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormLabel color="white">password</FormLabel>
                <InputGroup>
                  <InputCustom
                    type={showPassword ? "text" : "password"}
                    placeholder="password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pr="4.5rem"
                  />

                  <InputRightElement width="4.5rem" color="white">
                    <Box
                      cursor="pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
                <Text
                  textAlign="right"
                  cursor="pointer"
                  pb={3}
                  fontSize="12px"
                  pt={2}
                  color="#4cb5f9"
                  _hover={{ textDecoration: "underline" }}
                  onClick={() => setForgetPassword(true)}
                >
                  Forgot password
                </Text>
                <ButtonCustom
                  width="100%"
                  disable={username.trim() && password.trim() ? false : true}
                  bgColor="#4cb5f9"
                >
                  Login
                </ButtonCustom>
                <Flex p={5} gap="10px" align="center" justify="center">
                  <Text color="white">Don&apos;t have an account? </Text>
                  <Text
                    color="#4cb5f9"
                    cursor="pointer"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sign up
                  </Text>
                </Flex>
              </FormControl>
            </form>
          ) : (
            <form>
              <FormLabel color="white">Email</FormLabel>
              <InputCustom
                type="email"
                placeholder="Enter email to receive password..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ButtonCustom
                width="100%"
                disable={email.trim() ? false : true}
                bgColor="#4cb5f9"
              >
                Submit
              </ButtonCustom>
              <Box
                width="100%"
                color="#FFE450"
                fontSize="14px"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => setForgetPassword(false)}
              >
                Return Previos
              </Box>
            </form>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
