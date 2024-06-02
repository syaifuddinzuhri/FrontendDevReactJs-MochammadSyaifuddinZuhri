import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Tab: ComponentStyleConfig = {
  baseStyle: {
    tab: {
      _selected: {
        fontWeight: "semibold"
      }
    }
  },
  sizes: {
    md: {
      tab: {
        fontWeight: "semibold"
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue",
  },
}

export default Tab