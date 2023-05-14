import React from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import Todo from "./Todo";

export default function Checklist() {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({
    config,
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Todo />
    </ChakraProvider>
  );
}
