import React from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import theme from "./theme";
import Header from "./components/Header/Header";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Container maxW="6xl">
				<HashRouter>
					<Header />
					<Box zIndex={99} paddingBottom={[5, 10]}>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/donate" element={<Donate />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Box>
				</HashRouter>
			</Container>
		</ChakraProvider>
	);
}

export default App;
