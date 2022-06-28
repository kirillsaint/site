import { Box, Heading, Button, Stack, Center, Link } from "@chakra-ui/react";
import LazyImage from "../components/LazyImage";
import tg from "../images/tg.svg";
import gh from "../images/gh.svg";
import vk from "../images/vk.svg";
import React from "react";

function Main() {
	React.useEffect(() => {
		document.title = "kirillsaint/главная";
	}, []);
	return (
		<Box bgColor="main_bg" border="1px solid #FFFFFF" borderRadius="30px">
			<Box m="20px" paddingTop={10} paddingBottom={10}>
				<Box textAlign="center" alignContent="center" alignItems="center">
					<Stack direction="column" spacing={["200px", "150px"]}>
						<Center>
							<Button
								bgColor="main_bg"
								border="1px solid #FFFFFF"
								borderRadius="30px"
								h="60px"
								w="212px"
								_hover={{
									bgColor: "rgba(0, 255, 10, 0.2)",
									border: "1px solid #00FF0A",
									textDecoration: "none",
								}}
								fontWeight="400"
								as={Link}
								href="https://t.me/kirillsaint_blog"
								isExternal
							>
								Телеграм канал
							</Button>
						</Center>
						<Heading fontWeight="700" lineHeight="58px">
							kirillsaint
						</Heading>
						<Center>
							<Stack direction="row" spacing="10px">
								<Link href="https://t.me/kirillsaint" isExternal>
									<LazyImage draggable={false} src={tg} />
								</Link>
								<Link href="https://github.com/kirillsaint" isExternal>
									<LazyImage draggable={false} src={gh} />
								</Link>
								<Link href="https://vk.com/kirillsaint" isExternal>
									<LazyImage draggable={false} src={vk} />
								</Link>
							</Stack>
						</Center>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Main;
