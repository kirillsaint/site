import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";

function NotFound() {
	React.useEffect(() => {
		document.title = "kirillsaint/404";
	}, []);
	return (
		<Box bgColor="main_bg" border="1px solid #FFFFFF" borderRadius="30px">
			<Box m="20px" paddingTop={10} paddingBottom={10}>
				<Box textAlign="center" alignContent="center" alignItems="center">
					<Stack h="full" w="full" justifyContent="center">
						<Heading fontWeight="700" lineHeight="58px">
							страница не найдена
						</Heading>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default NotFound;
