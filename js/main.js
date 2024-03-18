/**
 *
 * @param {number} entry
 */
function game(entry) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log(randomNumber);
	if (randomNumber > parseInt(entry)) {
		return { type: "error", msg: "Votre nombre est trop élevé" };
	}
	if (randomNumber < parseInt(entry)) {
		return { type: "error", msg: "Votre nombre est trop bas" };
	}
	if (randomNumber === parseInt(entry)) {
		return { type: "success", msg: "Bingo, vous avez deviner le bon nombre" };
	}
	return { type: "", msg: "" };
}

document.getElementById("play").addEventListener("click", (e) => {
	const entry = document.getElementById("entry");
	e.preventDefault();
	const result = game(entry?.value);
	const source = `../img/${result.type}.png`;
	document.querySelector(".message img").src = source;
	document.querySelector(".message").style.flexDirection = "column-reverse";
	document.querySelector(".message .text").innerText = result?.msg;
	e.target.setAttribute("disabled", true);
	document.getElementById("play").innerText = "Patienter...";
});

setInterval(() => {
	document.querySelector(".message").style.flexDirection = "column";
	document.querySelector(".message img").src =
		"../img/welcome-smile_654623-115.avif";
	document.getElementById("play").removeAttribute("disabled");
	document.getElementById("play").innerText = "Jouer";
	document.querySelector(".message .text").innerText = "Faut essayer de jouer";
}, 8000);
