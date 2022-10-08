import { Panel, PanelHeader, View } from "@vkontakte/vkui";
import React from "react";
import Avatar from "../components/Avatar";

function Main() {
	return (
		<View id="main" activePanel="main">
			<Panel id="main">
				<PanelHeader before={<Avatar />}>Главная</PanelHeader>
			</Panel>
		</View>
	);
}

export default Main;
