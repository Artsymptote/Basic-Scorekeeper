//Score digits
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

//Drop-down & selection
const rounds = document.querySelector("#rounds");
let matchPtDeterminer = Number(rounds.value);

//Buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Button-to-number
btn1.addEventListener("click", function () {
	let scoreNum1 = Number(score1.innerText); //counter for the number
	scoreNum1 += 1;
	score1.innerText = scoreNum1;
	gamePoint(scoreNum1);
});

btn2.addEventListener("click", function () {
	let scoreNum2 = Number(score2.innerText); //counter for the number
	scoreNum2 += 1;
	score2.innerText = scoreNum2;
	gamePoint(scoreNum2);
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

//External Functions
function gamePoint(theScore) {
	if (matchPtDeterminer !== 0 && theScore === matchPtDeterminer) {
		score1.style.color = "red";
		score2.style.color = "green";
		//Disabling button
		btn1.disabled = true;
		btn2.disabled = true;
	}
}
