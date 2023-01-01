import { Icon24ChevronRight, Icon28Camera } from "@vkontakte/icons";
import {
	Avatar,
	CellButton,
	Group,
	PanelHeader,
	SimpleCell,
} from "@vkontakte/vkui";
import React, { Dispatch, SetStateAction } from "react";
import EitherLogo from "../assets/icons/EitherLogo.png";
import ExteraLogo from "../assets/icons/ExteraLogo.png";
import SilentLogo from "../assets/icons/SilentClient.png";
import { openLink } from "../helpers";

function Projects({
	setActiveModal,
}: {
	setActiveModal: Dispatch<SetStateAction<string | null>>;
}) {
	return (
		<>
			<PanelHeader>Проекты</PanelHeader>
			<Group>
				<CellButton onClick={() => setActiveModal("contact")}>
					Предложить идею
				</CellButton>
				<SimpleCell
					subtitle="Музыкальный лейбл"
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={EitherLogo} />}
					onClick={() => openLink("https://either.digital")}
				>
					Either Digital
				</SimpleCell>
				<SimpleCell
					subtitle="Веб-клиент для Telegram"
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={ExteraLogo} />}
					indicator="deprecated"
					onClick={() => openLink("https://web.extera.codes")}
				>
					exteraWeb
				</SimpleCell>
				<SimpleCell
					subtitle="Сервис для просмотра фильмов"
					after={<Icon24ChevronRight />}
					before={
						<Avatar size={48}>
							<Icon28Camera />
						</Avatar>
					}
					onClick={() => openLink("https://kinosearch.ml")}
				>
					KinoSearch
				</SimpleCell>
				<SimpleCell
					subtitle="Telegram-бот для скачивания видео с YouTube"
					after={<Icon24ChevronRight />}
					before={
						<Avatar size={48}>
							<Icon28Camera />
						</Avatar>
					}
					onClick={() => openLink("https://t.me/ytdaun_bot")}
				>
					YT Downloader Bot
				</SimpleCell>
				<SimpleCell
					subtitle="PVP-клиент для Minecraft с 30+ модами, FPS Boost, Optifine и косметикой"
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={SilentLogo} />}
					onClick={() => openLink("https://silentclient.net")}
				>
					Silent Client
				</SimpleCell>
			</Group>
		</>
	);
}

export default Projects;
