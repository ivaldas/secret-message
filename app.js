const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
	document.getElementById('message-form').classList.add('hide');
	document.getElementById('message-show').classList.remove('hide');

	document.getElementsByTagName('h1')[0].innerHTML = message;
}

document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
	event.preventDefault();

	document.getElementById('message-form').classList.add('hide');
	document.getElementById('link-form').classList.remove('hide');

	const input = document.getElementById('message-input');
	const encrypted = btoa(input.value);

	const linkInput = document.getElementById('link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});
