import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Progress: ComponentStyleConfig = {
  baseStyle: {
    track: {
      bg: "#E0E0E0",
      height: "4px",
      borderRadius: "4px"
    },
    filledTrack: {
      bg: "linear-gradient(292.27deg, #e80979 0%, #f8ce16 100%)",
      height: "4px",
      borderRadius: "4px"
    }
  },
  defaultProps: {
    size: '',
    variant: '',
  },
}

export default Progress