import type { ComponentStyleConfig } from '@chakra-ui/theme'
 
const Alert: ComponentStyleConfig = {
  baseStyle: {
    container: {
      borderRadius: "8px",
      fontSize: "12px",
      gap: "8px"
    },
    description: {
      fontSize: "12px"
    },
    title: {
      fontSize: "12px"
    },
  },
  variants: {
    info: {
      container: {
        backgroundColor: "#EDFAFF",
        color: "#828282"
      }
    }
  },
  defaultProps: {
    size: '',
    variant: '',
  },
}

export default Alert