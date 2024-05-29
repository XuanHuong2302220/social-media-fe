import { Button } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ButtonCustom = ({
  children,
  width,
  disable,
  onClick,
  mb,
  bgColor,
  color,
  borderRadius,
  zIndex,
  pos,
}) => {
  const isDisabled = disable === true;
  return (
    <Button
      width={width}
      color={isDisabled ? "black" : color}
      type={isDisabled ? "button" : "submit"}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      bgColor={isDisabled ? "#E2E8F0" : bgColor}
      onClick={onClick}
      mb={mb}
      zIndex={zIndex && zIndex}
      borderRadius={borderRadius && borderRadius}
      position={pos}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
