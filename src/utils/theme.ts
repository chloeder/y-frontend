import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0",
  sm: "425px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  breakpoints,
});
