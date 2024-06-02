import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Radio: ComponentStyleConfig = {
  baseStyle: {
    label: {
      flexGrow: 1,
      ml: 0
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      gap: 4
    },
    control: {
      borderRadius: "full",
      height: "20px",
      width: "20px",
      _checked: {
        borderColor: "#f8ce16",
        _before: {
          content: `""`,
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "#f8ce16",
        },
      },
    }
  },
  variants: { 
    revert: {
      label: {
        order: 2
      },
      control: {
        order: 3,
      }
    }
  },  
  sizes: {
    md: {
      control: { w: "20px", h: "20px" },
      label: { fontSize: "md" },
    }
  },
  defaultProps: {
    size: "md",
    colorScheme: "",
  },
}

export default Radio