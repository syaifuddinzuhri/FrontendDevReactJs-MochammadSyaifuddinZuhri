import { Box, Card, CardBody, Divider, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      mt={10}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Divider mb={5} />
      <Box display={"flex"} my={5} alignItems={"center"} gap={1}>
        <BiLockAlt />
        <Text fontSize={"x-small"}>Developer by Syaifuddin Zuhri </Text>
      </Box>
    </Box>
  );
};

export default Footer;
