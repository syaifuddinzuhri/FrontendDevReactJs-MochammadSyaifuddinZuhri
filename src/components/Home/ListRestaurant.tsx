"use client";

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';
import CardRestaurant from './CardRestaurant';
import ListRestaurantSkeleton from '../Skeleton/ListRestaurantSkeleton';
import { useRestaurantQuery } from '@/src/api/restaurant';
import { useSearchStore } from '@/src/stores/search';
import { RestaurantResponse } from '@/src/interfaces/restaurant';
import FilterHome from './FilterHome';
import { useFilterStore } from '@/src/stores/filter';

const ListRestaurant = () => {
    const { filter, pagination } = useSearchStore();
    const { price, category, status, currentPageRestaurantList } = useFilterStore();
    const setCurrentPageRestaurantList = useFilterStore(state => state.setCurrentPageRestaurantList);

    const [restaurants, setRestaurants] = useState<RestaurantResponse[]>([]);
    const [originalRestaurants, setOriginalRestaurants] = useState<RestaurantResponse[]>([]);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const {
        data: restaurantData,
        refetch: restaurantRefetch,
        isLoading: isLoadingRestaurant,
        isFetching: isFetchingRestaurant,
    } = useRestaurantQuery({
        page: currentPageRestaurantList || 1,
        perPage: 4,
        category: category
    });

    const handleLoadMore = () => {
        setCurrentPageRestaurantList(currentPageRestaurantList + 1);
    };

    useEffect(() => {
        restaurantRefetch();
        if (restaurantData) {
            if (currentPageRestaurantList !== restaurantData?.data.current_page) {
                return;
            }
            if (currentPageRestaurantList === 1) {
                setRestaurants(restaurantData.data.data);
                setOriginalRestaurants(restaurantData.data.data);
            } else {
                setRestaurants((prevRestaurants: any) => [
                    ...prevRestaurants,
                    ...restaurantData.data.data,
                ]);
                setOriginalRestaurants((prevRestaurants: any) => [
                    ...prevRestaurants,
                    ...restaurantData.data.data,
                ]);
            }
            setIsLastPage(restaurantData.data.current_page >= restaurantData.data.last_page);
        }
    }, [restaurantData, currentPageRestaurantList, category]);

    useEffect(() => {
        filterRestaurants()
    }, [originalRestaurants]);

    useEffect(() => {
        filterRestaurants();
    }, [status, price]);

    const filterRestaurants = () => {
        let filteredRestaurants = originalRestaurants;
        if (status === 'open') {
            filteredRestaurants = filteredRestaurants.filter((restaurant: RestaurantResponse) => restaurant.status === status);
        }
        if (price > 0) {
            filteredRestaurants = filteredRestaurants.filter((restaurant: RestaurantResponse) => restaurant.price >= 0 && restaurant.price <= price);
        }
        setRestaurants(filteredRestaurants);
    };

    return (
        <Box>
            <Box paddingY={2}>
                <FilterHome />
            </Box>

            <Text fontWeight="medium" fontSize="2xl" color="gray.700">
                All Restaurants
            </Text>
            <Box padding={3}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={4}>
                    {restaurants.map((item: any, i: number) => (
                        <GridItem key={i}>
                            <CardRestaurant data={item} />
                        </GridItem>
                    ))}
                </Grid>

                {!isLastPage && (
                    <Center mt={5}>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={handleLoadMore}
                        >
                            {
                                isLoadingRestaurant || isFetchingRestaurant ?
                                    <Spinner />
                                    :
                                    <Text
                                        fontFamily="Poppins"
                                        fontWeight="medium"
                                    >
                                        Load More
                                    </Text>
                            }
                        </Button>
                    </Center>
                )}
            </Box>
        </Box>
    );
};

export default ListRestaurant;
