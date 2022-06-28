import {
	Box,
	Heading,
	Button,
	Stack,
	Center,
	Link,
	Text,
} from "@chakra-ui/react";
import LazyImage from "../components/LazyImage";

import da from "../images/da.svg";
import yoomoney from "../images/yoomoney.svg";
import qiwi from "../images/qiwi.svg";

import React from "react";

function Donate() {
	React.useEffect(() => {
		document.title = "kirillsaint/донат";
	}, []);
	return (
		<Box bgColor="main_bg" border="1px solid #FFFFFF" borderRadius="30px">
			<Box m="20px" paddingTop={10} paddingBottom={10}>
				<Box textAlign="center" alignContent="center" alignItems="center">
					<Stack direction="column" spacing={["150px", "100px"]}>
						<Heading fontWeight="700" lineHeight="58px">
							донат
						</Heading>
						<Center>
							<Stack direction="row" spacing={["10px", "15px"]}>
								<Button
									w="80px"
									h="80px"
									bgColor="main_bg"
									border="1px solid #FFFFFF"
									borderRadius="30px"
									_hover={{
										bgColor: "rgba(0, 255, 10, 0.2)",
										border: "1px solid #00FF0A",
										textDecoration: "none",
									}}
									as={Link}
									href="https://qiwi.com/p/79061971281"
									isExternal
								>
									<LazyImage draggable={false} src={qiwi} />
								</Button>
								<Button
									w="80px"
									h="80px"
									bgColor="main_bg"
									border="1px solid #FFFFFF"
									borderRadius="30px"
									_hover={{
										bgColor: "rgba(0, 255, 10, 0.2)",
										border: "1px solid #00FF0A",
										textDecoration: "none",
									}}
									as={Link}
									href="https://yoomoney.ru/to/4100117474900042"
									isExternal
								>
									<LazyImage draggable={false} src={yoomoney} />
								</Button>
								<Button
									w="80px"
									h="80px"
									bgColor="main_bg"
									border="1px solid #FFFFFF"
									borderRadius="30px"
									_hover={{
										bgColor: "rgba(0, 255, 10, 0.2)",
										border: "1px solid #00FF0A",
										textDecoration: "none",
									}}
									as={Link}
									href="https://www.donationalerts.com/r/kirillsaint"
									isExternal
								>
									<LazyImage draggable={false} src={da} />
								</Button>
							</Stack>
						</Center>
						<Text fontSize={["20px", "24px"]} lineHeight={["25px", "29px"]}>
							вы можете задонатить мне,
							<br /> воспользовавшись одним из этих способов
						</Text>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Donate;
