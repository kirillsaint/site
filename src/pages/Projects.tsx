import {
	Box,
	Heading,
	Button,
	Stack,
	Center,
	Link,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	useDisclosure,
	IconButton,
	Icon,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Textarea,
	useToast,
	SimpleGrid,
} from "@chakra-ui/react";
import LazyImage from "../components/LazyImage";
import sberzvuk from "../images/sberzvuk.svg";
import { ReactComponent as close } from "../images/close.svg";
import React from "react";
import axios from "axios";

interface CardProps {
	title?: string;
	link: string;
	image?: string;
}

function Projects() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [username, setUsername] = React.useState<string>("");
	const [message, setMessage] = React.useState<string>("");
	const [errorUsername, setErrorUsername] = React.useState<string | null>(null);
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const bot_token = "5519938589:AAG3tQQVsMMwlUHbmcaeiizTwKvReSNUU2o"; // your bot token from @BotFather
	const user_id = "1566664501"; // your telegram id

	const toast = useToast();

	const handleUsernameChange = (e: any) => {
		const { value } = e.target;

		setUsername(value);
		setErrorUsername(null);
	};

	const handleMessageChange = (e: any) => {
		const { value } = e.target;

		setMessage(value);
		setErrorMessage(null);
	};

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			if (username === "") {
				setErrorUsername("Заполните это поле");
				return;
			}
			if (message === "") {
				setErrorMessage("Заполните это поле");
				return;
			}

			if (username[0] !== "@") {
				setErrorUsername("Юзернейм должен начинаться с @");
				return;
			}

			let fullUsername: string = username.replace("@", "");

			if (
				!/^[A-Za-z][A-Za-z0-9]*$/.test(fullUsername) ||
				fullUsername.length <= 4
			) {
				setErrorUsername("Укажите юзернейм!");
				return;
			}

			if (
				message.toLowerCase() === "кирилл, отсоси мой хуй" ||
				username.toLowerCase() === "@kirillsaint" ||
				message.toLowerCase() === "кирилл отсоси мой хуй" ||
				username.toLowerCase() === "kirillsaint"
			) {
				setUsername("");
				setMessage("");
				onClose();
				const a = document.createElement("a");
				a.target = "_blank";
				a.href = "/clown.mp4";
				a.click();
				return;
			}

			let text: string = `Новое сообщение от ${username}:\n\n${message}`;
			const { data: res } = await axios.get(
				encodeURI(
					`https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${user_id}&text=${text}`
				)
			);
			if (res.ok) {
				toast({
					title: "Предложение отправлено!",
					description: "Вам ответят в течение года.",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				setUsername("");
				setMessage("");
				onClose();
			} else {
				toast({
					title: "Произошла ошибка!",
					description: `${res.description}`,
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			}
		} catch (e) {
			toast({
				title: "Произошла ошибка!",
				description: `${e}`,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		document.title = "kirillsaint/проекты";
	}, []);

	const Card = (props: CardProps) => (
		<Button
			bgColor="main_bg"
			border="1px solid #FFFFFF"
			borderRadius="30px"
			h={["60px", "90px"]}
			w={["100%", "322px"]}
			_hover={{
				bgColor: "rgba(0, 255, 10, 0.2)",
				border: "1px solid #00FF0A",
				textDecoration: "none",
			}}
			fontWeight="400"
			as={Link}
			href={props.link}
			isExternal
		>
			{(props.title && (
				<Heading fontWeight="500" fontSize="30px" lineHeight="38px">
					{props.title}
				</Heading>
			)) || <LazyImage w="180px" src={props.image} draggable={false} />}
		</Button>
	);
	return (
		<Box bgColor="main_bg" border="1px solid #FFFFFF" borderRadius="30px">
			<Box m="20px">
				<Box textAlign="center" alignContent="center" alignItems="center">
					<Heading fontWeight="700" lineHeight="58px">
						проекты
					</Heading>
					<Center>
						<SimpleGrid
							paddingTop={5}
							paddingBottom={5}
							w="100%"
							columns={[1, 2, 3]}
							spacing={["10px", "25px"]}
						>
							<Center>
								<Card title="Either Digital" link="https://either.digital" />
							</Center>
							<Center>
								<Card title="SlivBot" link="https://t.me/ks_slivbot" />
							</Center>
							<Center>
								<Card image={sberzvuk} link="https://t.me/sbermusicbot" />
							</Center>
							<Center>
								<Card title="KinoSearch" link="https://kinosearch.ml" />
							</Center>
							<Center>
								<Card title="exteraWeb" link="https://web.extera.codes" />
							</Center>
						</SimpleGrid>
					</Center>
					<Stack direction="row" justifyContent="space-between">
						<Box />
						<Button
							bgColor="main_bg"
							border="1px solid #FFFFFF"
							borderRadius="30px"
							h="48px"
							w="226px"
							_hover={{
								bgColor: "rgba(0, 255, 10, 0.2)",
								border: "1px solid #00FF0A",
								textDecoration: "none",
							}}
							fontWeight="400"
							onClick={onOpen}
						>
							Предложить идею
						</Button>
					</Stack>
				</Box>
			</Box>
			<Modal size="md" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay
					bg="rgba(0, 0, 0, 0.7)"
					backdropFilter="auto"
					backdropBlur="10px"
				/>
				<ModalContent
					border="1px solid #FFFFFF"
					bgColor="black"
					borderRadius="30px"
				>
					<ModalHeader>
						<Stack direction="row" justifyContent="space-between">
							<Heading fontWeight="700" lineHeight="38px" fontSize="28px">
								Предложить идею
							</Heading>
							<IconButton
								aria-label="Закрыть"
								icon={<Icon as={close} />}
								onClick={onClose}
							/>
						</Stack>
					</ModalHeader>

					<ModalBody>
						<FormControl
							paddingBottom={5}
							isInvalid={(errorUsername && true) || false}
						>
							<FormLabel htmlFor="username">Юзернейм в Телеграм</FormLabel>
							<Input
								onChange={handleUsernameChange}
								id="username"
								type="text"
								placeholder="@kirillsaint"
								focusBorderColor="main"
								isDisabled={isLoading}
								_placeholder={{
									color: "#868686",
									fontWeight: "500",
									fontSize: "18px",
								}}
							/>
							{errorUsername && (
								<FormErrorMessage>{errorUsername}</FormErrorMessage>
							)}
						</FormControl>
						<FormControl isInvalid={(errorMessage && true) || false}>
							<FormLabel htmlFor="text">Предложение</FormLabel>
							<Textarea
								onChange={handleMessageChange}
								focusBorderColor="main"
								id="text"
								isDisabled={isLoading}
								placeholder="Кирилл, отсоси мой хуй"
								_placeholder={{
									color: "#868686",
									fontWeight: "500",
									fontSize: "18px",
								}}
							/>
							{errorMessage && (
								<FormErrorMessage>{errorMessage}</FormErrorMessage>
							)}
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							w="100%"
							bgColor="main"
							color="white"
							_hover={{ color: "black", bgColor: "white" }}
							fontWeight="700"
							lineHeight="30px"
							fontSize="20px"
							borderRadius="10px"
							onClick={handleSubmit}
							isLoading={isLoading}
						>
							Отправить
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default Projects;
