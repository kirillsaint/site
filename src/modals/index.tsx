import { ModalRoot, PlatformType } from "@vkontakte/vkui";
import React, { Dispatch, ReactElement, SetStateAction } from "react";
import Contact from "./Contact";

function Modals({
	activeModal,
	setActiveModal,
	isMobile,
	platform,
	setPopout,
}: {
	activeModal: string | null;
	setActiveModal: Dispatch<SetStateAction<string | null>>;
	setPopout: Dispatch<SetStateAction<ReactElement | null>>;
	isMobile: boolean;
	platform: PlatformType;
}) {
	return (
		<ModalRoot activeModal={activeModal}>
			{Contact(setActiveModal, isMobile, platform, setPopout)}
		</ModalRoot>
	);
}

export default Modals;
