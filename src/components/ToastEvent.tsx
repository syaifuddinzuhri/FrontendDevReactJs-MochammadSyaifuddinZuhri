import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react";

import {
  Alert,
  Box,
  Center,
  Spinner,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
function errorToast(
  toasts: any,
  title: string,
  message: string,
  position?: string
) {
  const toast = toasts;
  toast.closeAll();
  return toast({
    position: position ?? "top",
    title: title,
    description: message,
    status: "error",
    duration: 4000,
    isClosable: true,
  });
}

function successToast(
  toasts: any,
  title: string,
  message: string,
  position?: string,
  type?: string
) {
  const toast = toasts;
  toast.closeAll();
  if (type == "card") {
    return toast({
      position: position ?? "bottom",
      duration: 1000,
      isClosable: true,
      render: () => (
        <>
          <Box width={"100%"} boxShadow='2xl' rounded='lg' bg='white'>
            <Center>
              <VStack>
                <Box h='6' ms={100} me={100} />
                <Container>
                  <Center>
                    <Text>{title}</Text>
                  </Center>
                </Container>
                <HiCheckCircle color='green' size={100} />
                <Box h='2' />
                <Box ms={100} me={100}>
                  <Alert status='success' variant='subtle'>
                    <Center>{message}</Center>
                  </Alert>
                </Box>
                <Box h='2' />
              </VStack>
            </Center>
          </Box>
        </>
      ),
    });
  } else {
    return toast({
      position: position ?? "top",
      title: title,
      description: message,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  }
}

function loadingToast(toasts: any, message: string, position?: string) {
  const toast = toasts;
  toast.closeAll();
  return toast({
    position: position == "center" ? "bottom" : position,
    duration: 129000,
    isClosable: false,
    render: () => (
      <>
        <Box width={"100%"} boxShadow='2xl' rounded='lg' bg='white'>
          <Center>
            <VStack>
              <Box h='6' ms={100} me={100} />
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
              <Box h='2' />
              <Box ms={100} me={100}>
                <Alert variant='info'>
                  <Center>{message}</Center>
                </Alert>
              </Box>
              <Box h='2' />
            </VStack>
          </Center>
        </Box>
      </>
    ),
  });
}

export { errorToast, successToast, loadingToast };
