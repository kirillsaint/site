function openLink(link: string) {
	let a = document.createElement("a");
	a.target = "_blank";
	a.href = link;
	a.click();
}

export { openLink };
