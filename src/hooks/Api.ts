import axios from "axios";
import config from "../config";

async function SubmitContactData(username: string, message: string) {
	const text: string = `Новое сообщение от ${username}:\n\n${message}`;

	const { data: res } = await axios.post(
		`https://api.telegram.org/bot${config.bot_token}/sendMessage`,
		{ chat_id: config.user_id, text: text }
	);

	return res;
}

export { SubmitContactData };
