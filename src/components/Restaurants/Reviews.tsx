import { IRating } from '@/src/interfaces/restaurant';
import { Avatar, Box, Card, CardBody, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Rating from '../Rating';
import { handleErrorImage } from '@/src/utils/common';

interface IProps {
    data: IRating[];
}

const Reviews = ({ data }: IProps) => {
    return (
        <Card overflow="hidden" variant="outline">
            <CardBody>
                <Heading size="sm" color="gray.600" fontWeight="semibold" mb={3}>
                    Reviews
                </Heading>
                <Divider my={3} />
                {data.map((review, index) => (
                    <Box key={index} mb={4}>
                        <Flex alignItems="center">
                            <Image src={review.image} alt={review.name} boxSize="50px" borderRadius={"md"} mr={2} />
                            <Box>
                                <Text fontSize="sm" fontWeight="semibold">{review.name}</Text>
                                <Rating value={review.rating} size='14px' />
                            </Box>
                        </Flex>
                        <Text mt={2} fontSize="sm" color="gray.600">{review.text}</Text>
                    </Box>
                ))}
            </CardBody>
        </Card>
    );
};
export default Reviews;
