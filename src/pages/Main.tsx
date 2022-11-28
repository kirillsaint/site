import {
	Button,
	Group,
	Header,
	HorizontalCell,
	HorizontalScroll,
	PanelHeader,
	Placeholder,
	PlatformType,
	Avatar as VKAvatar,
} from "@vkontakte/vkui";
import React from "react";
import Avatar from "../components/Avatar";
import TelegramIcon from "../assets/icons/Telegram.svg";
import GitHubIcon from "../assets/icons/GitHub.svg";
import VKIcon from "../assets/icons/VK.svg";
import { openLink } from "../helpers";

function Main({ platform }: { platform: PlatformType }) {
	return (
		<>
			<PanelHeader>Главная</PanelHeader>
			<Group>
				<Placeholder
					icon={<Avatar size={96} />}
					header="kirillsaint"
					action={
						<Button
							size="m"
							onClick={() => openLink("https://t.me/kirillsaint_blog")}
						>
							Телеграм канал
						</Button>
					}
				>
					Веб-разработчик из Омска
				</Placeholder>
				<Header>Ссылки</Header>
				<HorizontalScroll>
					<div style={{ display: "flex" }}>
						<HorizontalCell
							size="s"
							header="Telegram"
							onClick={() => openLink("https://t.me/nuwql")}
						>
							<VKAvatar
								size={platform === "ios" ? 64 : 56}
								src={TelegramIcon}
							/>
						</HorizontalCell>
						<HorizontalCell
							size="s"
							header="GitHub"
							onClick={() => openLink("https://github.com/kirillsaint")}
						>
							<VKAvatar size={platform === "ios" ? 64 : 56} src={GitHubIcon} />
						</HorizontalCell>
						<HorizontalCell
							size="s"
							header="VK"
							onClick={() => openLink("https://vk.com/kirillsaint")}
						>
							<VKAvatar size={platform === "ios" ? 64 : 56} src={VKIcon} />
						</HorizontalCell>
					</div>
				</HorizontalScroll>
			</Group>
		</>
	);
}

export default Main;
