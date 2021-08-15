function showPassword(source) {
	let target = source.getAttribute("data-target");
	let input = document.querySelector(`#${target}`);

	if (input.type == "text") {
		input.type = "password";
		input.placeholder = "***********";
	} else if (input.type == "password") {
		input.type = "text";
		input.placeholder = "senhaexemplo";
	}

	source.classList.toggle("fa-eye");
	source.classList.toggle("fa-eye-slash");
}

window.document
	.querySelector("#login-form")
	.addEventListener("submit", function (evt) {
		evt.preventDefault();

		const formData = new FormData(evt.target);
		const data = {};

		for (var [key, value] of formData.entries()) {
			data[key] = value;
		}

        window.location = 'index.html';
	});
