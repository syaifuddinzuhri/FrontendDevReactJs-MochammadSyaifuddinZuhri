"use client"

import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Rating from "../Rating";
import { useRouter } from "next/navigation";
import { RestaurantResponse } from "@/src/interfaces/restaurant";
import { handleErrorImage } from "@/src/utils/common";

interface IProps {
    data: RestaurantResponse
}

const CardRestaurant = ({ data }: IProps) => {
    const router = useRouter();
    return (
        <Card
            overflow="hidden"
            variant="outline"
        >
            <Image
                objectFit="cover"
                maxW={"100%"}
                h={{ base: "300px", sm: "250px" }}
                src={data.photo}
                alt={data.name}
                onError={handleErrorImage}
            />
            <Stack>
                <CardBody>
                    <Heading size="sm" color={"gray.600"} fontWeight={"semibold"}>
                        {data.name}
                    </Heading>
                    <Box my={3}>
                        <Rating value={data.rating} />
                    </Box>
                    <Flex gap={2} alignItems={"center"} justifyContent={"space-between"} mt={3} mb={4}>
                        <Flex gap={2}>
                            <Text fontSize={{ base: "md", sm: "sm" }}>{data.category?.name}</Text>
                            <Text fontSize={{ base: "md", sm: "sm" }}>${data.price}</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Box
                                width="10px"
                                height="10px"
                                borderRadius="full"
                                backgroundColor={data.status === 'open' ? "green.500" : "red.500"}
                                mr={2}
                            />
                            <Text fontSize={{ base: "md", sm: "sm" }}>{data.status === 'open' ? 'Open Now' : 'Closed'}</Text>
                        </Flex>
                    </Flex>

                    <Button
                        size="md"
                        variant={"primary"}
                        w={"100%"}
                        mt="5"
                        onClick={() => router.push(`restaurant/${data.id}`)}
                    >
                        <Text
                            color="white"
                            fontFamily="Poppins"
                            fontWeight={"medium"}
                            fontSize={"15px"}
                        >
                            LEARN MORE
                        </Text>
                    </Button>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default CardRestaurant