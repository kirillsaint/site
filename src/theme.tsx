import { extendTheme } from "@chakra-ui/react";
import "./css/theme.css";

const styles = {
	global: {
		body: {
			bg: "black",
			color: "white",
		},
	},
};

const colors = {
	main: "#00FF0A",
	main_bg: "rgba(255, 255, 255, 0.1)",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const fonts = {
	heading: `'Heading', sans-serif`,
	body: `'Regular', sans-serif`,
};

export default extendTheme({ styles, fonts, config, colors });
