import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const RestaurantDetailSkeleton = () => {
    return (
        <Flex flexDirection={"column"} gap={3}>
            <Skeleton height={"300px"} />
            <Skeleton height={"30px"} width={"50%"} />
            <Box>
                <Skeleton count={3} />
            </Box>
        </Flex>
    )
}

export default RestaurantDetailSkeleton