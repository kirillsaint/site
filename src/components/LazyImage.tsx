import { Skeleton, Image } from "@chakra-ui/react";
import React from "react";

export default function LazyImage(props: any) {
	const [loaded, setLoaded] = React.useState(false);
	return (
		<Skeleton isLoaded={loaded}>
			<Image
				onLoad={() => {
					setLoaded(true);
				}}
				{...props}
			/>
		</Skeleton>
	);
}
