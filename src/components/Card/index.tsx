import { Box, ChakraProps } from '@chakra-ui/react'
import React, { FC, ReactNode, useMemo } from 'react'

interface CardProps extends ChakraProps {
  children: ReactNode,
  size?: "sm" | "md"
}

const Card: FC<CardProps> = (props) => {
  const { size = "md", children, ...restProps } = props
  const cardSize = useMemo(() => {
    if (size === 'sm') return 3
    return 4
  }, [size])

  return (
    <Box
      backgroundColor="white"
      boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
      borderRadius="8px"
      p={cardSize}
      width="100%"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default Card