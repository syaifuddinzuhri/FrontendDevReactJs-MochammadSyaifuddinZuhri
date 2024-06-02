import { Box, Card, CardBody, Grid, GridItem, Stack } from '@chakra-ui/react';
import React from 'react'
import Skeleton from 'react-loading-skeleton';

const ListRestaurantSkeleton = () => {
    const numbers = Array.from({ length: 4 }, (_, index) => index + 1);

    return (
        <Box paddingY={10}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={4}>
                {numbers.map((number) => (
                    <GridItem key={number}>
                        <Card
                            overflow="hidden"
                            variant="outline"
                        >
                            <Skeleton height={"300px"} />

                            <Stack>
                                <CardBody>
                                    <Skeleton height={"30px"} width={"50%"} />
                                    <Skeleton count={3} />
                                </CardBody>
                            </Stack>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default ListRestaurantSkeleton