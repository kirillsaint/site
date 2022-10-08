import {
	PanelHeader,
	SimpleCell,
	Group,
	Avatar,
	Footer,
	Snackbar,
} from "@vkontakte/vkui";
import React, { Dispatch, SetStateAction, ReactElement } from "react";
import SBPIcon from "../assets/icons/SBP.svg";
import QiwiIcon from "../assets/icons/Qiwi.svg";
import YooMoneyIcon from "../assets/icons/YooMoney.svg";
import { Icon16Done, Icon24ChevronRight } from "@vkontakte/icons";
import { openLink } from "../helpers";

function Donate({
	setPopout,
}: {
	setPopout: Dispatch<SetStateAction<ReactElement | null>>;
}) {
	return (
		<>
			<PanelHeader>Донат</PanelHeader>
			<Group>
				<SimpleCell
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={QiwiIcon} />}
					subtitle="Номер: 79061971281"
					onClick={() => openLink("https://qiwi.com/p/79061971281")}
				>
					QIWI
				</SimpleCell>
				<SimpleCell
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={YooMoneyIcon} />}
					subtitle="Номер: 4100117474900042"
					onClick={() => openLink("https://yoomoney.ru/to/4100117474900042")}
				>
					ЮMoney
				</SimpleCell>
				<SimpleCell
					after={<Icon24ChevronRight />}
					before={<Avatar size={48} src={SBPIcon} />}
					subtitle="Номер: 79061971281"
					onClick={() => {
						navigator.clipboard.writeText("79061971281");
						setPopout(
							<Snackbar
								onClose={() => setPopout(null)}
								before={
									<Avatar
										size={24}
										style={{
											background: "var(--vkui--color_background_accent)",
										}}
									>
										<Icon16Done fill="#fff" width={14} height={14} />
									</Avatar>
								}
							>
								Номер скопирован
							</Snackbar>
						);
					}}
				>
					СБП
				</SimpleCell>
			</Group>
			<Footer>Спасибо за донат!</Footer>
		</>
	);
}

export default Donate;
