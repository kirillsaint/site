import { Group, PanelHeader, Placeholder } from "@vkontakte/vkui";
import React from "react";

function NotFound() {
	return (
		<>
			<PanelHeader>404</PanelHeader>
			<Group>
				<Placeholder header="404">Страница не найдена</Placeholder>
			</Group>
		</>
	);
}

export default NotFound;
