import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      justify="center"
      align="center"
      fontSize="30px"
    >
      <Text fontSize="60px" fontWeight="bold">
        Oops!
      </Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{error.statusText || error.message}</Text>
      <Link to="/">
        <Button
          p={3}
          width="200px"
          bgColor="primaryColor"
          color="white"
          mt="20px"
          _hover={{ color: "black", opacity: "0.8" }}
        >
          Go back home
        </Button>
      </Link>
    </Flex>
    // <div id="error-page">
    //   <Text>Oops!</Text>
    //   <Text>Sorry, an unexpected error has occurred.</Text>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>
  );
}
