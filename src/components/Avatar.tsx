import React from "react";
import { Avatar as VKAvatar } from "@vkontakte/vkui";
import config from "../config";

function Avatar({ size }: { size?: number }) {
	return (
		<VKAvatar
			src={`https://tx.me/i/userpic/320/${config.username}.jpg`}
			size={size || 36}
		/>
	);
}

export default Avatar;
