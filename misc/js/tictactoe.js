let cells = document.querySelectorAll(".cell");
let jogador = "X";

// Muda a letra do jogador
function toggleJogador() {
	if (jogador === "O") {
		jogador = "X";
	} else {
		jogador = "O";
	}
}

function marcar(evt) {
	let cell = evt.target;

	if (cell.innerText === "") {
		// cell.innerText = jogador;
		cell.classList.add(`cell-${jogador.toLowerCase()}`);

		let ganhador = "";

		// Horizontal
		for (let i = 0; i < 3; i++) {
			if (
				cells[3 * i].innerText.trim().length > 0 &&
				cells[3 * i].innerText === cells[3 * i + 1].innerText &&
				cells[3 * i].innerText === cells[3 * i + 2].innerText
			)
				ganhador = cells[3 * i].innerText;
		}

		// Vertical
		for (let i = 0; i < 3; i++) {
			if (
				cells[i].innerText.trim().length > 0 &&
				cells[i].innerText === cells[i + 3].innerText &&
				cells[i].innerText === cells[i + 6].innerText
			)
				ganhador = cells[i].innerText;
		}

		// Diagonal
		if (
			(cells[0].innerText.trim().length > 0 &&
				cells[0].innerText === cells[4].innerText &&
				cells[0].innerText === cells[8].innerText) ||
			(cells[2].innerText.trim().length > 0 &&
				cells[2].innerText === cells[4].innerText &&
				cells[2].innerText === cells[6].innerText)
		) {
			ganhador = cells[4].innerText;
		}

		if (ganhador.length > 0) {
			alert(`Parabéns Jogador ${jogador}`);
		}

		// Toggle Jogador
		toggleJogador();
	}
}

cells.forEach((cell, index) => {
	cell.addEventListener("click", marcar);
	// cell.innerText = index;
});
