import { Panel, PanelHeader, View } from "@vkontakte/vkui";
import React from "react";

function Main() {
	return (
		<View id="main" activePanel="main">
			<Panel id="main">
				<PanelHeader>Главная</PanelHeader>
			</Panel>
		</View>
	);
}

export default Main;
