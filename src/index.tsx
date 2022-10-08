import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
	AdaptivityProvider,
	ConfigProvider,
	AppRoot,
	WebviewType,
} from "@vkontakte/vkui";
import App from "./App";
import "@vkontakte/vkui/dist/vkui.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ConfigProvider webviewType={WebviewType.INTERNAL} appearance="dark">
			<AdaptivityProvider>
				<AppRoot>
					<App />
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
