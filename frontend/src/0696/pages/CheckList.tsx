import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Todo from "./Todo";

export default function Checklist() {
	return (
		<ChakraProvider>
			<Todo />
		</ChakraProvider>
	);
}
