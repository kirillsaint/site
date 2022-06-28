import { Box } from "@chakra-ui/react";
import LazyImage from "../LazyImage";

export default function Logo(props: any) {
	return (
		<Box {...props}>
			<LazyImage
				src="https://tx.me/i/userpic/320/kirillsaint.jpg"
				borderRadius="9999px"
				w={["50px", "60px"]}
				h={["50px", "60px"]}
			/>
		</Box>
	);
}
