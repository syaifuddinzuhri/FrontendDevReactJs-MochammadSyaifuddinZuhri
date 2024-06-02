"use client";

import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export interface IHeaderBarProps {
  children?: React.ReactNode;
  isBack: boolean;
  title: string;
}

const HeaderBar: React.FC<IHeaderBarProps> = (props) => {
  const { children, isBack, title } = props;
  const router = useRouter();
  return (
    <Box
      backgroundPosition="bottom"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      display={"flex"}
      alignItems={"center"}
      gap={3}
    >
      {isBack && (
        <BiArrowBack cursor={"pointer"} onClick={() => router.back()} />
      )}
      <Text fontSize={"md"}>{title}</Text>
    </Box>
  );
};

export default HeaderBar;
