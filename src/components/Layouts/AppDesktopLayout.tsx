"use client";

import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

interface IAppDesktopLayout {
  children: React.ReactNode;
}

const propsDefaultValue: Omit<IAppDesktopLayout, "children"> = {};

const AppDesktopLayout = (props: IAppDesktopLayout) => {
  const { children } = { ...propsDefaultValue, ...props };
  return (
    <Container maxW='container.sm'>
      <Box minH={"90vh"} maxW='100%'paddingX={[2, 4, 20]}>{children}</Box>
      <Footer/>
    </Container>
  );
};

export default AppDesktopLayout;
