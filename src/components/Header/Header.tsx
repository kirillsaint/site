import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { Link as RLink, useLocation } from "react-router-dom";
import Ava from "./Ava";

const NavBar = (props: any) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<Ava w="100px" />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} toggle={toggle} />
		</NavBarContainer>
	);
};

const CloseIcon = () => (
	<svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
		<title>Закрыть</title>
		<path
			fill="white"
			d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
		/>
	</svg>
);

const MenuIcon = () => (
	<svg
		width="24px"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		fill="white"
	>
		<title>Меню</title>
		<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
	</svg>
);

interface IMenuToggle {
	toggle: any;
	isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: IMenuToggle) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	);
};

const MenuItem = ({ children, isLast, to = "/", toggle, ...rest }: any) => {
	let location: any = useLocation();
	let color: string = "white";
	if (location.pathname === to) {
		color = "main";
	}
	return (
		<Link
			color={color}
			_hover={{ textDecoration: "none", color: "main" }}
			onClick={toggle}
			as={RLink}
			to={to}
		>
			<Text fontSize="20px" fontWeight="400" display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};

interface IMenuLinks {
	isOpen: boolean;
	toggle: any;
}

const MenuLinks = ({ isOpen, toggle }: IMenuLinks) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to="/" toggle={toggle}>
					главная
				</MenuItem>
				<MenuItem to="/projects" toggle={toggle}>
					проекты
				</MenuItem>
				<MenuItem to="/donate" toggle={toggle}>
					донат
				</MenuItem>
			</Stack>
		</Box>
	);
};

const NavBarContainer = ({ children, ...props }: any) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			paddingTop={5}
			paddingRight={[5, 0]}
			bg="black"
			color="white"
			zIndex={100}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default NavBar;
