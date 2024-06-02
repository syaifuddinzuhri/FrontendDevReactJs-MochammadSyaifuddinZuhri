import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  addon: {
    mx: 3,
    top: "unset",
  },
  field: {
    paddingX: 4,
    paddingY: 3,
    height: "auto",
    fontSize: { base: "12px", md: "14px" },
    lineHeight: { base: "20px", md: "24px" },
    borderRadius: 8,
    _focus: {
      borderColor: "#ff5d00",
    },
  },
  element: {
    mx: 3,
    bottom: 0,
    width: 6,
  },
  group: {
    ":has(.chakra-input__left-element) > input": {
      paddingLeft: 12,
    },
    ":has(.chakra-input__right-element) > input": {
      paddingRight: 12,
    },
  },
});

const InputConfig = defineMultiStyleConfig({
  baseStyle,
  variants: {
    default: {
      field: {
        border: "1px solid #EDEFF2",
        background: "#FAFBFC",
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});

export default InputConfig;
