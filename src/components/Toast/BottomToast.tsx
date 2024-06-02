"use client";

import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Slide,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import React, { useMemo } from "react";

interface IBottomToast {
  isOpen: boolean;
  status: "success" | "error" | "warning";
  title?: string;
  description?: string;
}

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const iconImageUrl: {
  name: IBottomToast["status"];
  url: string;
}[] = [
  {
    name: "success",
    url: "/assets/icons/check.png",
  },
];

const BottomToast: React.FC<IBottomToast> = (props) => {
  const { isOpen, status, description, title } = props;
  const imageSrc = useMemo(() => {
    return iconImageUrl.find((item) => item.name === status)?.url;
  }, [status]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={() => {}}
        size="xs"
      >
        <ModalOverlay />
        <ModalContent
          px={3}
          bg="transparent"
          maxW={"100%"}
          boxShadow="none"
          alignItems="flex-end"
          height={"100%"}
          m={0}
        >
          <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
            <Box
              p="40px"
              color="black"
              mt="4"
              bg="white"
              rounded="md"
              shadow="md"
              roundedTop={"2xl"}
              textAlign="center"
            >
              {imageSrc ? (
                <Image src={imageSrc} align="icon" mx="auto" w={"55px"} />
              ) : null}
              {title ? (
                <Text
                  className={inter.className}
                  fontSize="xl"
                  fontWeight="semibold"
                  mt={0.5}
                >
                  {title}
                </Text>
              ) : null}
              {description ? (
                <Text mt={0.5} color="gray.800">
                  {description}
                </Text>
              ) : null}
            </Box>
          </Slide>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BottomToast;
