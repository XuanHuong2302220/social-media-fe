import { useEffect, useRef, useState } from "react";
import {
  Flex,
  Input,
  Text,
  Image,
  Center,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../../assets/image/logo.svg";
import SearchUser from "../../SearchUser";
import ResultBox from "../../ResultBox";
import MessageBox from "../message/MessageBox";
import NotificationBox from "../notify/NotificationBox";
import IconCustom from "../../IconCustom";
import ProfileDropdown from "../profile/ProfileDropdown";
import NavbarButton from "./NavbarButton";
import MiniMessageBox from "../message/MiniMessageBox";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeNoti, setActiveNoti] = useState(false);
  const [activeHome, setActiveHome] = useState(false);

  const [activeMessBoxes, setActiveMessBoxes] = useState([]);

  const [indexMess, setIndexMess] = useState(0);

  const [focus, setFocus] = useState(false);
  const [focusMess, setFocusMess] = useState(false);

  const [openProfile, setOpenProfile] = useState(false);

  const moveRef = useRef(null);

  useEffect(() => {
    setActiveHome(true);
    const handleClickOutside = (e) => {
      if (moveRef.current && !moveRef.current.contains(e.target)) {
        setActiveHome(true);
        setActive(false);
        setActiveNoti(false);
        setFocus(false);
        setFocusMess(false);
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Flex
        ref={moveRef}
        w="100%"
        alignItems="center"
        bgColor="bgColor"
        justify="space-between"
        pos="fixed"
        h="70px"
        p={6}
        zIndex="9999"
      >
        {/* Logo and search bar */}
        <Flex gap="10px" pos="relative">
          <Link to="/">
            <Image src={logo} alt="logo" boxSize="40px" cursor="pointer" />
          </Link>
          <Input
            onFocus={() => {
              setFocus(true);
            }}
            borderRadius="15px"
            placeholder="Search"
            width="300px"
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            bgColor="#28353E"
            color="#B8CBD9"
            borderColor="#28353E"
            _hover={{ outline: "none" }}
          />

          {/* condition open searchBox */}
          {focus ? (
            <ResultBox
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
            >
              <Link to="/profile/:me">
                <SearchUser
                  fullname="Ngo Xuan Huong"
                  searchPost
                  onClick={() => setFocus(false)}
                />
              </Link>
              <SearchUser fullname="Ngo Xuan Huong" searchPost />
              <SearchUser fullname="Ngo Xuan Huong" searchPost />
              <SearchUser fullname="Ngo Xuan Huong" searchPost />
              <SearchUser fullname="Ngo Xuan Huong" searchPost />
            </ResultBox>
          ) : null}
        </Flex>

        <Flex
          gap={{ base: "5px", sm: "5px", lg: "20px" }}
          align="center"
          pos="relative"
        >
          {/* Home bar */}
          <NavbarButton active={activeHome} text="Home" />
          {/* message bar */}
          <NavbarButton
            active={active}
            text="Mess"
            onClick={() => {
              setActive(!active);
              setActiveHome(false);
              setActiveNoti(false);
            }}
            quantity={5}
          />

          {/* Notification bar */}
          <NavbarButton
            active={activeNoti}
            onClick={() => {
              setActiveNoti(!activeNoti);
              setActive(false);
              setActiveHome(false);
            }}
            text="Notify"
            quantity={5}
          />

          {/* User profile */}
          <Flex gap="15px" align="center">
            <Center height="30px">
              <Divider orientation="vertical" opacity="0.1" />
            </Center>
            <Flex
              maxWidth="150px"
              width="auto"
              borderRadius="20px"
              bgColor={{ base: "bgColor", sm: "bgColor", lg: "#28353E" }}
              rounded={{ base: "50%", sm: "100%", lg: "30px" }}
              color="white"
              alignItems="center"
              gap="10px"
              p={2}
              cursor={"pointer"}
              onClick={() => {
                setOpenProfile(!openProfile);
                setActive(false);
                setActiveNoti(false);
              }}
              pos={"relative"}
            >
              <Avatar size="sm" />
              <Text
                fontSize="12px"
                color="white"
                isTruncated
                display={{ base: "none", sm: "none", lg: "block" }}
              >
                Ngo Xuan Huong
              </Text>
              <IconCustom display={{ base: "none", sm: "none", lg: "flex" }}>
                <IoMdArrowDropdown />
              </IconCustom>
            </Flex>
          </Flex>

          {/* condition open profile */}
          {openProfile && <ProfileDropdown />}
          {/* condition open message box */}
          {active && (
            <MessageBox
              focusMess={focusMess}
              setFocusMess={setFocusMess}
              setActiveMessBoxes={setActiveMessBoxes}
              setActive={setActive}
              setActiveHome={setActiveHome}
              activeMessBoxes={activeMessBoxes}
            />
          )}
          {activeNoti && <NotificationBox />}
        </Flex>

        {/* condition open message mini box */}
      </Flex>
      <Flex pos="fixed" bottom="0" gap="10px" zIndex="9999" right={6}>
        {activeMessBoxes?.slice(-3).map((box, index) => (
          <MiniMessageBox
            key={index}
            setActiveMess={setActiveMessBoxes}
            index={index}
          />
        ))}
      </Flex>
      <Outlet />
    </>
  );
};

export default Navbar;
