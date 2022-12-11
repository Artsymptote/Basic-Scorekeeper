//Score digits
const scoresBox = document.querySelector(".scores");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

//Drop-down & selection
const rounds = document.querySelector("#rounds");
const matchPtDeterminer = Number(rounds.value);

//Buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//PLANS
//TODO 1. Connect the match-count dropdown with the display numbers.I want the drop down to determine which number goes red when.
//? can we listen for the number that is selected rather than the selection iself? FOR EXAMPLE can we use event bubbling to listen for which score digit changes-- listen to the <text> element for changes in the <span> elements?
//TODO 2. I want the counting to stop working when one of the numbers reaches the match-end.
//?when btn1 OR btn2 .innerText reaches dropdown # innerText the buttons no longer connect to the numbers?
//* DONE! I need a counter that will keep the score.
//* DONE! I need a reset button that resets the numbers, colors, and match-point.

//Button-to-number
btn1.addEventListener("click", function () {
	let scoreNum1 = Number(score1.innerText); //counter for the number
	scoreNum1 += 1;
	score1.innerText = scoreNum1;
	if (matchPtDeterminer != 0 && scoreNum1 == matchPtDeterminer) {
		score1.style.color = "green";
		score2.style.color = "red";
	}
});

btn2.addEventListener("click", function () {
	console.dir(rounds);
	console.dir(score2);

	let scoreNum2 = Number(score2.innerText); //counter for the number
	scoreNum2 += 1;
	score2.innerText = scoreNum2;
	if (matchPtDeterminer != 0 && scoreNum2 == matchPtDeterminer) {
		score1.style.color = "red";
		score2.style.color = "green";
	}
});

//Reset
btn3.addEventListener("click", function () {
	score1.innerText = "0";
	score2.innerText = "0";
	score1.style.color = "black";
	score2.style.color = "black";
	rounds.selectedIndex = 0;
});

//Rounds
//TODO 1. I want the drop down to determine which number goes red,when.

scoresBox.addEventListener("change", function (e) {
	if (Number(e.target.innerText) === Number(rounds.value)) {
		e.target.style.color = "green;";
	}
});

// rounds.addEventListener("change", function () {
// 	console.log(`Playing to ${matchPtDeterminer}`);
// 	console.log(`Player 1: ${score1.innerText}, Player 2: ${score2.innerText}`);
// 	let playerOne = score1.innerText;
// 	let playerTwo = Number(score2.innerText);
// 	console.log(`${playerOne}${playerTwo}`);
// });
