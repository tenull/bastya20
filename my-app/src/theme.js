import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
    body: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontSize: "16px",
        lineHeight: "1.7",
        color: "gray.800",
      },
    },
  },
});

export default theme;
