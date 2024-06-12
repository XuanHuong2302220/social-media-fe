import { useState } from "react";
import { Avatar, Divider, Flex, Text, Switch } from "@chakra-ui/react";
import ResultBox from "../../ResultBox";
import IconCustom from "../../IconCustom";
import { IoLogOutOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import useLogout from "../../../hooks/auth/useLogout";

const ProfileDropdown = () => {
  const [active, setActive] = useState(false);
  const { logout } = useLogout();

  const handleLogout = async () => {
    console.log("logout");
    await logout();
  };
  return (
    <>
      <ResultBox>
        <Flex
          align="center"
          gap="10px"
          p={3}
          _hover={{ cursor: "pointer", bgColor: "gray.500", rounded: "10px" }}
          mb={2}
        >
          <Avatar size="sm" />
          <Text fontWeight="bold">Ngo Xuan Huong</Text>
        </Flex>
        <Divider mb={2} />
        <Flex direction="column">
          <Flex
            align="center"
            p={2}
            justify="space-between"
            _hover={{ bgColor: "gray.500", cursor: "pointer", rounded: "10px" }}
          >
            <Flex align="center" gap="10px">
              <IconCustom color>{active ? <IoSunny /> : <FaMoon />}</IconCustom>

              <Text
                fontSize="16px"
                color="white"
                textAlign="center"
                fontWeight="bold"
              >
                Theme
              </Text>
            </Flex>
            <Switch
              size="md"
              justifyItems="end"
              isChecked={active}
              onChange={() => setActive(!active)}
            />
          </Flex>
          <Flex
            align="center"
            gap="10px"
            p={2}
            _hover={{ bgColor: "gray.500", cursor: "pointer", rounded: "10px" }}
            onClick={handleLogout}
          >
            <IconCustom color>
              <IoLogOutOutline />
            </IconCustom>
            <Text
              fontSize="16px"
              color="white"
              textAlign="center"
              fontWeight="bold"
            >
              Log out
            </Text>
          </Flex>
        </Flex>
      </ResultBox>
    </>
  );
};

export default ProfileDropdown;
