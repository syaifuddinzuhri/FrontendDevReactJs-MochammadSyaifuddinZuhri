"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "dotenv/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "@/theme/theme";
const queryClient = new QueryClient();
require("dotenv").config();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
        <ToastContainer />
      </QueryClientProvider>
    </CacheProvider>
  );
}
