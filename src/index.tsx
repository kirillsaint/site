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
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "@vkontakte/vkui/dist/vkui.css";
import { Title } from "react-head-meta";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<Title title="kirillsaint/главная" />} />
			<Route path="/projects" element={<Title title="kirillsaint/проекты" />} />
			<Route path="/donate" element={<Title title="kirillsaint/донат" />} />
			<Route
				path="*"
				element={
					<>
						<Navigate to="/404" />
						<Title title="kirillsaint/404" />
					</>
				}
			/>
		</Routes>
		<ConfigProvider webviewType={WebviewType.INTERNAL} appearance="dark">
			<AdaptivityProvider>
				<AppRoot>
					<App />
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	</HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
