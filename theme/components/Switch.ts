import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Switch: ComponentStyleConfig = {
  baseStyle: {
    track: {
      bg: "#E0E0E0",
      _checked: {
        bg: "#f8ce16"
      }
    }
  },
  sizes: {
  },
  defaultProps: {
    size: "md",
    colorScheme: "",
  },
}

export default Switch