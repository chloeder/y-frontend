import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./utils/theme";

const queryClient = new QueryClient({});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraBaseProvider>
    </QueryClientProvider>
  );
}
