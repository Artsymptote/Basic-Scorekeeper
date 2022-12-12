//Score digits
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

//Drop-down & selection
const rounds = document.querySelector("#rounds");

//Buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Button-to-number

let scoreNum1 = 0; //counter for the number
let scoreNum2 = 0;
let matchPtDeterminer = 2;
let isGameOver = false;

btn1.addEventListener("click", function () {
	if (!isGameOver) {
		scoreNum1 += 1;
		if (scoreNum1 === matchPtDeterminer) {
			isGameOver = true;
		}
		score1.innerText = scoreNum1;
	}

	//SKM ORIGINAL FUNCTIONING CODE
	// if (matchPtDeterminer !== 0 && scoreNum1 === matchPtDeterminer) {
	// 	score1.style.color = "green";
	// 	score2.style.color = "red";
	// 	//Disabling button
	// 	btn1.disabled = true;
	// 	btn2.disabled = true;
	// }
});

btn2.addEventListener("click", function () {
	if (!isGameOver) {
		scoreNum2 += 1;
		if (scoreNum2 === matchPtDeterminer) {
			isGameOver = true;
		}
		score2.innerText = scoreNum2;
	}

	//SKM ORIGINAL FUNCTIONING CODE
	// if (matchPtDeterminer !== 0 && scoreNum2 === matchPtDeterminer) {
	// 	score1.style.color = "red";
	// 	score2.style.color = "green";
	// 	//Disabling button
	// 	btn1.disabled = true;
	// 	btn2.disabled = true;
	// }
});

//Reset
btn3.addEventListener("click", function () {
	score1.innerText = "0";
	score2.innerText = "0";
	score1.style.color = "black";
	score2.style.color = "black";
	rounds.selectedIndex = 0;
	btn1.disabled = false;
	btn2.disabled = false;
});
