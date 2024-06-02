import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    container: {
      display: "flex",
      // justifyContent: "space-between"
    },
    control: {
      height: "20px",
      width: "20px",
      _checked: {
        // borderColor: "#CD5A0F",
        bg: "#16537E",
      },
    },
    label: {
      fontSize: "14px",
    },
  },
  variants: {
    revert: {
      label: {
        order: 2,
        ml: 0,
      },
      control: {
        order: 3,
      },
    },
  },
  sizes: {
    md: {
      control: { w: "20px", h: "20px" },
      label: { fontSize: "sm" },
    },
  },
  defaultProps: {
    size: "md",
    colorScheme: "",
  },
};

export default Checkbox;
