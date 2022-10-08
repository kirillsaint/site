import { Icon24Dismiss } from "@vkontakte/icons";
import {
	ModalPage,
	ModalPageHeader,
	PlatformType,
	PanelHeaderClose,
	IOS,
	ANDROID,
	PanelHeaderButton,
	FormLayout,
	FormItem,
	Input,
	Textarea,
	Button,
	Snackbar,
	Avatar,
} from "@vkontakte/vkui";
import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { SubmitContactData } from "../hooks/Api";
import { Icon16Done } from "@vkontakte/icons";

function Contact(
	setActiveModal: Dispatch<SetStateAction<string | null>>,
	isMobile: boolean,
	platform: PlatformType,
	setPopout: Dispatch<SetStateAction<ReactElement | null>>
) {
	const onClose = () => setActiveModal(null);

	const [username, setUsername] = React.useState<string>("");
	const [message, setMessage] = React.useState<string>("");
	const [errorUsername, setErrorUsername] = React.useState<string | null>(null);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const usernameRegex = /^@[A-Za-z][A-Za-z0-9_]*$/;

	const handleUsernameChange = (e: any) => {
		const { value } = e.target;

		setUsername(value);
		if (value.trim() === "") {
			setErrorUsername("Это поле обязательное");
			return;
		}
		if (!usernameRegex.test(value)) {
			setErrorUsername("Введите юзернейм");
			return;
		}
		setErrorUsername(null);
	};

	const handleMessageChange = (e: any) => {
		const { value } = e.target;

		setMessage(value);
		if (value.trim() === "") {
			setErrorMessage("Это поле обязательное");
			return;
		}
		setErrorMessage(null);
	};

	const onSubmit = async () => {
		try {
			setIsLoading(true);
			let error: boolean = false;
			if (errorUsername || errorMessage) return;
			if (username.trim() === "") {
				setErrorUsername("Это поле обязательное");
				error = true;
			}
			if (message.trim() === "") {
				setErrorMessage("Это поле обязательное");
				error = true;
			}

			if (error) return;

			const data = await SubmitContactData(username, message);

			if (data.ok) {
				setUsername("");
				setMessage("");
				setActiveModal(null);
				setPopout(
					<Snackbar
						onClose={() => setPopout(null)}
						before={
							<Avatar
								size={24}
								style={{ background: "var(--vkui--color_background_accent)" }}
							>
								<Icon16Done fill="#fff" width={14} height={14} />
							</Avatar>
						}
					>
						Сообщение отправлено!
					</Snackbar>
				);
			} else {
				setErrorMessage("Произошла какая-то ошибка, попробуйте позже.");
				setErrorUsername("Произошла какая-то ошибка, попробуйте позже.");
			}
		} catch {
			setErrorMessage("Произошла какая-то ошибка, попробуйте позже.");
			setErrorUsername("Произошла какая-то ошибка, попробуйте позже.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ModalPage
			id="contact"
			header={
				<ModalPageHeader
					before={
						isMobile &&
						platform === ANDROID && <PanelHeaderClose onClick={onClose} />
					}
					after={
						isMobile &&
						platform === IOS && (
							<PanelHeaderButton onClick={onClose}>
								<Icon24Dismiss />
							</PanelHeaderButton>
						)
					}
				>
					Предложить идею
				</ModalPageHeader>
			}
			onClose={onClose}
			dynamicContentHeight
		>
			<FormLayout>
				<FormItem
					top="Юзернейм в Telegram"
					status={errorUsername ? "error" : "default"}
					bottom={errorUsername}
				>
					<Input
						name="username"
						value={username}
						onChange={handleUsernameChange}
						disabled={isLoading}
					/>
				</FormItem>
				<FormItem
					top="Сообщение"
					status={errorMessage ? "error" : "default"}
					bottom={errorMessage}
				>
					<Textarea
						name="message"
						value={message}
						onChange={handleMessageChange}
						disabled={isLoading}
					/>
				</FormItem>
				<FormItem>
					<Button size="l" stretched loading={isLoading} onClick={onSubmit}>
						Отправить
					</Button>
				</FormItem>
			</FormLayout>
		</ModalPage>
	);
}

export default Contact;
