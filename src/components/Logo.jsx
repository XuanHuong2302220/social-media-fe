import { Image, Flex, Text } from "@chakra-ui/react";
import logo from "../assets/image/logo.svg";
const Logo = () => {
  return (
    <Flex align="center" gap="5px" justify="center">
      <Text fontSize="30px" fontWeight="600" color="white">
        𝓒𝓱𝓪𝓽𝓒𝓱𝓪𝓽
      </Text>
      <Image src={logo} alt="logo" boxSize="40px" />
    </Flex>
  );
};

export default Logo;
