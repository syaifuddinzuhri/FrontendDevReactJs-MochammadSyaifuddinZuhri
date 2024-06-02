"use client"
import { useCategoriesQuery } from '@/src/api/category';
import { CategoryResponse } from '@/src/interfaces/category';
import { useFilterStore } from '@/src/stores/filter';
import { Box, Checkbox, Divider, Flex, Select, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, NumberInput, NumberInputField, Button, SliderMark } from '@chakra-ui/react'
import React, { useState } from 'react'

const FilterHome = () => {
    const { price, status, category } = useFilterStore();

    const setStatus = useFilterStore(state => state.setStatus);
    const setCategory = useFilterStore(state => state.setCategory);
    const setCurrentPageRestaurantList = useFilterStore(state => state.setCurrentPageRestaurantList);
    const setPrice = useFilterStore(state => state.setPrice);

    const {
        data: categoriesData,
    } = useCategoriesQuery();

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        setCurrentPageRestaurantList(1);
        setCategory(selectedCategory)
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const status = event.target.checked;
        setStatus(status ? 'open' : 'closed');
    };

    const handleChange = (price: number) => {
        setPrice(price);
    };

    const handleReset = () => {
        setCurrentPageRestaurantList(1);
        setCategory("")
        setStatus("")
        setPrice(0)
    };

    return (
        <>
            <Divider />
            <Text my={2} fontSize={"md"} color={"gray.700"}>Filter by:</Text>
            <Flex gap={4} pb={4} alignItems={{ base: 'start', md: 'center' }} flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
                <Flex w={"100%"} alignItems={{ base: 'start', md: 'start' }} justifyContent={"start"} flexDirection={{ base: 'column', md: 'row' }} gap={4}  >
                    <Box>
                        <Text mb={2} fontSize={"md"} color={"gray.700"}>Status:</Text>
                        <Checkbox onChange={handleStatusChange} isChecked={status === 'open' ? true : false}>Open Now</Checkbox>
                    </Box>
                    <Box width={{ base: '100%', sm: '25%', md: '50%', lg: '20%' }} px={{ base: 0, md: 5 }}>
                        <Text mb={2} fontSize={"md"} color={"gray.700"}>Price Range:</Text>
                        <Slider
                            aria-label="slider-ex-1"
                            value={price}
                            onChange={handleChange}
                            min={0}
                            max={200}
                            step={10}
                        >
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb boxSize={6}>
                                <Box as="span" fontSize="10px">
                                    {price}
                                </Box>
                            </SliderThumb>
                            {/* <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>0
                            </SliderMark>
                            <SliderMark value={900} mt='1' ml='-2.5' fontSize='sm'>900
                            </SliderMark> */}
                        </Slider>
                    </Box>
                    <Box flex={1} width={{ base: '100%', sm: '25%', md: '50%', lg: '20%' }}>
                        <Text mb={2} fontSize={"md"} color={"gray.700"}>Category:</Text>
                        <Select onChange={handleCategoryChange} value={category || ''} width={{ base: '100%', sm: '25%', md: '50%', lg: '20%' }}>
                            <option value=''>All Category</option>
                            {categoriesData?.data.map((item: CategoryResponse, i: number) => (
                                <option value={item.id} key={i}>{item.name}</option>
                            ))}
                        </Select>
                    </Box>
                </Flex>
                <Box flexShrink={0}>
                    <Flex gap={3}>
                        <Button
                            size="sm"
                            variant={"outline"}
                            w={"100%"}
                            onClick={handleReset}
                        >
                            <Text
                                fontFamily="Poppins"
                                fontWeight={"medium"}
                            >
                                CLEAR ALL
                            </Text>
                        </Button>
                    </Flex>
                </Box>
            </Flex>

            <Divider />
        </>
    )
}

export default FilterHome
