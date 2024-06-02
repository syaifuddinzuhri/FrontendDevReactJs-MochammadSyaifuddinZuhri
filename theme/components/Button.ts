import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    width: "100%",
    fontSize: "14px",
    color: "black",
    fontWeight: 500,
    transition: "0.3s ease-out",
    opacity: 1,
    background: "#ff5d00",
    // borderRadius: "50px",
    _hover: {
      background: "#E25504",
    },
  },
  sizes: {
    xs: {
      height: "32px",
      py: 2,
      fontSize: "12px",
    },
    sm: {
      height: "40px",
    },
    md: {
      fontSize: "14px",
      height: "42px",
    },
  },
  variants: {
    solid: {
      color: "#333333",
      backgroundColor: "#F1F6F7",
    },
    primary: {
      backgroundColor: "#16537E",
      _hover: {
        background: "#1273b8",
      },
    },
    outline: {
      color: "#5b5b5b",
      background: "transparent",
    },
    "outline-blue": {
      background: "#EDFAFF",
      border: "1px solid",
      borderColor: "#f8ce16",
      color: "#333333",
    },
    "outline-clean": {
      background: "transparent",
      border: "1px solid",
      borderColor: "#e80979",
      color: "#e80979",
    },
  },
  defaultProps: {
    size: "md",
    variant: "",
  },
};

export default Button;
