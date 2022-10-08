import React, { ReactElement } from "react";
import {
	withAdaptivity,
	usePlatform,
	ViewWidth,
	VKCOM,
	SplitLayout,
	PanelHeader,
	SplitCol,
	Panel,
	Group,
	Cell,
	Epic,
	Tabbar,
	TabbarItem,
	View,
} from "@vkontakte/vkui";
import {
	Icon28DonateOutline,
	Icon28FolderOutline,
	Icon28HomeOutline,
} from "@vkontakte/icons";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Modals from "./modals";

const App = withAdaptivity(
	({ viewWidth }: { viewWidth: number }) => {
		const platform = usePlatform();
		const [activeStory, setActiveStory] = React.useState<string>("main");
		const [activeModal, setActiveModal] = React.useState<string | null>(null);
		const [popout, setPopout] = React.useState<ReactElement | null>(null);
		const onStoryChange = (e: any) =>
			setActiveStory(e.currentTarget.dataset.story);
		const isDesktop = viewWidth >= ViewWidth.TABLET;
		const hasHeader = platform !== VKCOM;
		const isMobile = viewWidth <= ViewWidth.MOBILE;

		return (
			<SplitLayout
				header={hasHeader && <PanelHeader separator={false} />}
				style={{ justifyContent: "center" }}
				modal={
					<Modals
						activeModal={activeModal}
						setActiveModal={setActiveModal}
						isMobile={isMobile}
						platform={platform}
						setPopout={setPopout}
					/>
				}
				popout={popout}
			>
				{isDesktop && (
					<SplitCol fixed width={280} maxWidth={280}>
						<Panel>
							{hasHeader && <PanelHeader />}
							<Group>
								<Cell
									disabled={activeStory === "main"}
									style={
										activeStory === "main"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="main"
									onClick={onStoryChange}
									before={<Icon28HomeOutline />}
								>
									Главная
								</Cell>
								<Cell
									disabled={activeStory === "projects"}
									style={
										activeStory === "projects"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="projects"
									onClick={onStoryChange}
									before={<Icon28FolderOutline />}
								>
									Проекты
								</Cell>
								<Cell
									disabled={activeStory === "donate"}
									style={
										activeStory === "donate"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="donate"
									onClick={onStoryChange}
									before={<Icon28DonateOutline />}
								>
									Донат
								</Cell>
							</Group>
						</Panel>
					</SplitCol>
				)}

				<SplitCol
					animate={!isDesktop}
					spaced={isDesktop}
					width={isDesktop ? "560px" : "100%"}
					maxWidth={isDesktop ? "560px" : "100%"}
				>
					<Epic
						activeStory={activeStory}
						tabbar={
							!isDesktop && (
								<Tabbar>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "main"}
										data-story="main"
										text="Главная"
									>
										<Icon28HomeOutline />
									</TabbarItem>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "projects"}
										data-story="projects"
										text="Проекты"
									>
										<Icon28FolderOutline />
									</TabbarItem>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "donate"}
										data-story="donate"
										text="Донат"
									>
										<Icon28DonateOutline />
									</TabbarItem>
								</Tabbar>
							)
						}
					>
						<View id="main" activePanel="main">
							<Panel id="main">
								<Main platform={platform} />
							</Panel>
						</View>
						<View id="projects" activePanel="projects">
							<Panel id="projects">
								<Projects setActiveModal={setActiveModal} />
							</Panel>
						</View>
						<View id="donate" activePanel="donate">
							<Panel id="donate"></Panel>
						</View>
					</Epic>
				</SplitCol>
			</SplitLayout>
		);
	},
	{
		viewWidth: true,
	}
);

export default App;
