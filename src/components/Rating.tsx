"use client"

import React, { useState } from 'react';
import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ value = 0, size = "24px" }) => {
    const [rating, setRating] = useState(value);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <Flex>
            {Array.from({ length: 5 }).map((_, index) => {
                if (index < fullStars) {
                    return (
                        <Icon
                            key={index}
                            as={FaStar}
                            boxSize={size}
                            color="yellow.400"
                            cursor="pointer"
                        />
                    );
                } else if (index === fullStars && hasHalfStar) {
                    return (
                        <Icon
                            key={index}
                            as={FaStarHalfAlt}
                            boxSize={size}
                            color="yellow.400"
                            cursor="pointer"
                        />
                    );
                } else {
                    return (
                        <Icon
                            key={index}
                            as={FaStar}
                            boxSize={size}
                            color="gray.300"
                            cursor="pointer"
                        />
                    );
                }
            })}
        </Flex>
    );
};

export default Rating;
