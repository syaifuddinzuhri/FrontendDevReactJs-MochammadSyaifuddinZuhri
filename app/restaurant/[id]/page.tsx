"use client"
import { isEmpty } from "@chakra-ui/utils";
import { useRestaurantDetailQuery } from '@/src/api/restaurant'
import HeaderBar from '@/src/components/HeaderBar'
import AppDesktopLayout from '@/src/components/Layouts/AppDesktopLayout'
import Rating from '@/src/components/Rating'
import RestaurantDetailSkeleton from '@/src/components/Skeleton/RestaurantDetailSkeleton'
import { Box, Card, CardBody, Divider, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { handleErrorImage } from "@/src/utils/common";
import Reviews from "@/src/components/Restaurants/Reviews";
import { useFilterStore } from "@/src/stores/filter";

const RestaurantDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const {
    data: restaurantDetailData,
    refetch: restaurantDetailRefetch,
    isLoading: isLoadingRestaurantDetail,
  } = useRestaurantDetailQuery(
    params.id.toString() || "",
    !isEmpty(params.id.toString())
  );

  const setStatus = useFilterStore(state => state.setStatus);
  const setCategory = useFilterStore(state => state.setCategory);
  const setCurrentPageRestaurantList = useFilterStore(state => state.setCurrentPageRestaurantList);
  const setPrice = useFilterStore(state => state.setPrice);


  const handleBack = () => {
    setCurrentPageRestaurantList(1);
    setCategory("")
    setStatus("")
    setPrice(0)
    router.push('/');
  }

  return (
    <AppDesktopLayout>
      <Box paddingY={6}>
        <HeaderBar isBack={true} title={"Restaurant Detail"} onClick={handleBack} />
        <Grid
          templateAreas={{ base: `"nav" "main"`, sm: `"nav main"` }}
          gridTemplateColumns={{ base: '1fr', sm: '1fr 30%' }}
          gap={4}
          color='blackAlpha.700'
          mt={4}
        >
          {isLoadingRestaurantDetail ?
            <RestaurantDetailSkeleton />
            :
            <>
              <GridItem area={'nav'}>
                <Image
                  borderRadius={10}
                  objectFit="cover"
                  w={"100%"}
                  h={{ base: "300px", sm: "600px" }}
                  src={restaurantDetailData?.data.photo}
                  alt={restaurantDetailData?.data.name}
                  onError={handleErrorImage}
                />
                <Text fontWeight={"semibold"} fontSize={"3xl"} color={"gray.700"} mt={6}>
                  {restaurantDetailData?.data.name}
                </Text>
                <Rating value={restaurantDetailData?.data.rating} />
                <Flex gap={2} alignItems={"center"} justifyContent={"space-between"} mt={3} mb={4}>
                  <Flex gap={2}>
                    <Text fontSize={{ base: "md", sm: "sm" }}>{restaurantDetailData?.data.category?.name}</Text>
                    <Text fontSize={{ base: "md", sm: "sm" }}>${restaurantDetailData?.data.price}</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Box
                      width="10px"
                      height="10px"
                      borderRadius="full"
                      backgroundColor={restaurantDetailData?.data.status === 'open' ? "green.500" : "red.500"}
                      mr={2}
                    />
                    <Text fontSize={{ base: "md", sm: "sm" }}>{restaurantDetailData?.data.status === 'open' ? 'Open Now' : 'Closed'}</Text>
                  </Flex>
                </Flex>

                <Text my={6} fontSize={"md"} color={"gray.700"}>
                  {restaurantDetailData?.data.description}
                </Text>
                <Divider />
                <Text my={3} fontSize={"md"} color={"gray.700"} fontWeight={"bold"}>Location</Text>
                <Box style={{ width: '100%', height: '400px' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1222552580193!2d112.63699009999999!3d-7.8822754999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881c52a038bb5%3A0xd24cd72fd10ca707!2sSekawan%20Media!5e0!3m2!1sen!2sid!4v1717328068543!5m2!1sen!2sid" width="100%" height="100%" loading="lazy" allowFullScreen></iframe>
                </Box>
              </GridItem>
              <GridItem area={'main'}>
                <Reviews data={restaurantDetailData?.data.ratings || []}/>
              </GridItem></>
          }

        </Grid>
      </Box>
    </AppDesktopLayout>
  )
}

export default RestaurantDetailPage