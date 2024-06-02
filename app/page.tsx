import FilterHome from '@/src/components/Home/FilterHome'
import ListRestaurant from '@/src/components/Home/ListRestaurant'
import AppDesktopLayout from '@/src/components/Layouts/AppDesktopLayout'
import Button from '@/theme/components/Button'
import { Box, Checkbox, Divider, Flex, FormControl, Select, Text } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <AppDesktopLayout>
      <Box paddingY={6}>
        <Text fontWeight={"semibold"} fontSize={"3xl"} color={"gray.700"}>
          Restaurants
        </Text>
        <Text mt={3} fontSize={"md"} color={"gray.700"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tenetur quidem sed quos autem nostrum non omnis quod aperiam magnam sint totam, est repellat consectetur. Odio similique adipisci labore dolorem?
        </Text>
      </Box>
      <ListRestaurant />
    </AppDesktopLayout>
  )
}

export default HomePage