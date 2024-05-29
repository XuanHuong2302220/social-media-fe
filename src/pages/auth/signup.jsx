import { useEffect, useState } from "react";
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
  Select,
} from "@chakra-ui/react";
import Logo from "../../components/Logo";
import ButtonCustom from "../../components/Button";
import banner from "../../assets/image/banner.png";
import InputCustom from "../../components/InputCustom";

import {
  days,
  months,
  years,
  convertMonths,
  convertDays,
} from "../../utils/getTime";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    birthday: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nextInfo, setNextInfo] = useState(false);

  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    setUser({
      ...user,
      birthday: `${birthday.year} ${convertMonths(
        birthday.month
      )} ${convertDays(birthday.day)}`,
    });
  }, [birthday.year, birthday.month, birthday.day]);

  console.log(user.birthday);

  // console.log(birthday.year, birthday.month, birthday.day);

  const handleNext = (e) => {
    e.preventDefault();
    setNextInfo(true);
    // console.log(username, password);
  };

  return (
    <Box w="100%" h="100vh" bgColor="#18181A">
      <Flex align="center" justifyContent="center" h="100%">
        <Image
          src={banner}
          alt="background"
          boxSize={{ base: 0, lg: "400px" }}
        />

        <Box width="350px" p={5} h="auto">
          <Logo />
          {!nextInfo ? (
            <form style={{ padding: "20px 0" }} onSubmit={handleNext}>
              <FormControl>
                <FormLabel color="white">Username</FormLabel>
                <InputCustom
                  type="text"
                  placeholder="Enter your username..."
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <InputCustom
                  type="email"
                  placeholder="Enter your email..."
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="white">Password</FormLabel>
                <InputGroup>
                  <InputCustom
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter yout password..."
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
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
              </FormControl>

              <FormControl>
                <FormLabel color="white">ConfirmPassword</FormLabel>
                <InputGroup>
                  <InputCustom
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password..."
                    value={user.confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                    pr="4.5rem"
                  />

                  <InputRightElement width="4.5rem" color="white">
                    <Box
                      cursor="pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <ButtonCustom
                width="100%"
                disable={
                  user.username.trim() &&
                  user.email.trim() &&
                  user.password.trim() &&
                  user.confirmPassword.trim()
                    ? false
                    : true
                }
                bgColor="#4cb5f9"
              >
                Next
              </ButtonCustom>

              <Box mt="20px" color="white" width="100%">
                <Text w="100%" textAlign="center">
                  Already have an account?{" "}
                  <Box
                    as="span"
                    color="#4cb5f9"
                    cursor="pointer"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Login now
                  </Box>
                </Text>
              </Box>
            </form>
          ) : (
            <form style={{ padding: "20px 0" }}>
              <FormControl>
                <FormLabel color="white">Your Birthday</FormLabel>
                <Flex justify="space-between">
                  <Select
                    placeholder="--yy"
                    _placeholder={{ color: "gray" }}
                    borderColor="#29292c"
                    bgColor="#29292c"
                    color="gray"
                    size="md"
                    borderRadius="5px"
                    mb={5}
                    width="30%"
                    value={birthday.year}
                    onChange={(e) =>
                      setBirthday({ ...birthday, year: e.target.value })
                    }
                  >
                    {years().map((year) => (
                      <option
                        key={year}
                        style={{
                          color: "black",
                          cursor: "not-allowed",
                        }}
                      >
                        {year}
                      </option>
                    ))}
                  </Select>

                  <Select
                    placeholder="--mm"
                    _placeholder={{ color: "gray" }}
                    borderColor="#29292c"
                    bgColor="#29292c"
                    color="gray"
                    size="md"
                    borderRadius="5px"
                    mb={5}
                    sx={{ backgroundColor: "#29292c" }}
                    width="30%"
                    value={birthday.month}
                    onChange={(e) =>
                      setBirthday({ ...birthday, month: e.target.value })
                    }
                  >
                    {months().map((month) => (
                      <option
                        key={month}
                        style={{
                          color: "black",
                          padding: "0 10px",
                        }}
                      >
                        {month}
                      </option>
                    ))}
                  </Select>

                  <Select
                    placeholder="--dd"
                    _placeholder={{ color: "gray" }}
                    borderColor="#29292c"
                    bgColor="#29292c"
                    color="gray"
                    size="md"
                    borderRadius="5px"
                    mb={5}
                    sx={{ backgroundColor: "#29292c" }}
                    width="30%"
                    value={birthday.day}
                    onChange={(e) =>
                      setBirthday({ ...birthday, day: e.target.value })
                    }
                  >
                    {days({ month: birthday.month, year: birthday.year }).map(
                      (day) => (
                        <option
                          key={day}
                          style={{
                            color: "black",
                            cursor: "pointer",
                            height: "10px",
                          }}
                        >
                          {day}
                        </option>
                      )
                    )}
                  </Select>
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="white">FullName</FormLabel>
                <InputCustom
                  type="text"
                  placeholder="Enter your full name..."
                  value={user.fullName}
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Your Gender</FormLabel>
                <Select
                  placeholder="select your gender..."
                  _placeholder={{ color: "gray" }}
                  borderColor="#29292c"
                  bgColor="#29292c"
                  color="gray"
                  size="md"
                  borderRadius="5px"
                  mb={3}
                  sx={{ backgroundColor: "#29292c" }}
                  value={user.gender}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                >
                  <option style={{ color: "black", cursor: "pointer" }}>
                    Male
                  </option>
                  <option style={{ color: "black", cursor: "pointer" }}>
                    Female
                  </option>
                </Select>
              </FormControl>

              <ButtonCustom
                width="100%"
                disable={
                  user.fullName.trim() &&
                  birthday.day.trim() &&
                  birthday.month.trim() &&
                  birthday.year.trim() &&
                  user.gender.trim()
                    ? false
                    : true
                }
                bgColor="#4cb5f9"
                mb={2}
              >
                Signup
              </ButtonCustom>
              <Box
                width="100%"
                color="#FFE450"
                fontSize="14px"
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => setNextInfo(false)}
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

export default Signup;
