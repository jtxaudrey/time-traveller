function toggleContent() {
	let content = document.querySelector("#content");
	content.classList.toggle('hidden');
	let button = document.querySelector("#mainButton");
	button.classList.toggle('open');
}

function toggleMore() {
	let more = document.querySelector("#moreContent");
	more.classList.toggle('hidden');
}
