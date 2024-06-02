import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Button from "./components/Button";

const breakpoints = ["30em", "48em", "62em", "80em"];

const theme = extendTheme({
  breakpoints: {
    base: breakpoints[0],
    sm: breakpoints[1],
    md: breakpoints[2],
    lg: breakpoints[3],
  },
  fonts: {
    heading: `Poppins`,
    body: `Poppins`,
  },
  Text: {
    baseStyle: {
      fontSize: "14px",
    },
  },
  colors: {
    primary: {
      500: "#64cfc7",
      700: "#49bdb5",
    },
    secondary: {
      500: "#ff5d00",
      700: "#E25504",
    },
  },
  sizes: {
    container: "768px",
  },
  components: {
    Input,
    Button,
    Container,
    Modal,
    Checkbox,
    Text: {
      baseStyle: {
        fontSize: "14px",
      },
    },
  },
});

export default theme;
