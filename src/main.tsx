import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Plus Jakarta Sans",
  },
  config,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
