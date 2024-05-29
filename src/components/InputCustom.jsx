import { Input } from "@chakra-ui/react";

function InputCustom({ type, placeholder, value, onChange, pr, mb }) {
  return (
    <Input
      _placeholder={{ color: "gray" }}
      borderColor={"#28353E"}
      type={type}
      bgColor="#28353E"
      placeholder={placeholder}
      color="white"
      value={value}
      onChange={onChange}
      size="md"
      borderRadius="5px"
      mb={!mb && 5}
      pr={pr}
      _focus={{ borderColor: "transparent !important" }}
    />
  );
}

export default InputCustom;
