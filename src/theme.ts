import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      'dark-blue': 'hsl(209, 23%, 22%)',
      'very-dark-blue': 'hsl(207, 26%, 17%)'
    },
    light: {
      'very-dark-blue': 'hsl(200, 15%, 8%)',
      'dark-gray': 'hsl(0, 0%, 52%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
    }
  },
  fonts: {
    heading: `'Nunito-Sans', sans-serif`,
    body: `'Nunito-Sans', sans-serif`,
  }
})