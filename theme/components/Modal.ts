import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialogContainer: {
      alignItems: "flex-end"
    },
    dialog: {
      my: 0
    },
    closeButton: {
      position: "relative",
      top: 0,
      insetEnd: 0
    },
    header: {
      pr: 0,
      pl: 2,
      py: 0,
      fontSize: "lg",
      fontWeight: "medium"
    },
    body: {
      px: "20px",
      pt: "0px"
    }
  },
  sizes: {
    md: {
      dialog: {
        maxW: "563px"
      }
    }
  },
  defaultProps: {
    size: "md"
  }
}

export default Modal