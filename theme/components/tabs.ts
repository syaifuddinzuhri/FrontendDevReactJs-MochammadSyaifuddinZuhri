import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tab: {
      py: 4,
      _selected: {
        fontWeight: "semibold"
      },
      
    }
  },
  sizes: {
    md: {
      tab: {
        py: 4
      }
    }
  },
  variants: {
    line: {
      tab: {
        py: 4
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue",
  },
}

export default Tabs