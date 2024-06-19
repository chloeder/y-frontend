import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/poppins";

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
      heading: {
        fontFamily: "Poppins",
      },
      body: {
        fontFamily: "Poppins",
        bg: "black",
        color: "white",
      },
    },
  },
  breakpoints,
});
