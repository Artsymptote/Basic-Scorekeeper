//Score digits
const scoresBox = document.querySelector(".scores");
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
let matchPtDeterminer = Number(rounds.value);

btn1.addEventListener("click", function () {
	if (scoreNum1 !== matchPtDeterminer) {
		scoreNum1 += 1;
		score1.innerText = scoreNum1;
	}

	// if (matchPtDeterminer !== 0 && scoreNum1 === matchPtDeterminer) {
	// 	score1.style.color = "green";
	// 	score2.style.color = "red";
	// 	//Disabling button
	// 	btn1.disabled = true;
	// 	btn2.disabled = true;
	// }
});

btn2.addEventListener("click", function () {
	if (scoreNum2 !== matchPtDeterminer) {
		scoreNum2 += 1;
		score2.innerText = scoreNum2;
	}

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

//Rounds
//TODO 1. I want the drop down to determine which number goes red,when.

// scoresBox.addEventListener("change", function (e) {
// 	if (Number(e.target.innerText) === Number(rounds.value)) {
// 		e.target.style.color = "green;";
// 	}
// });
