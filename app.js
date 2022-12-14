//Score digits
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

//Score counters
let scoreNum1 = 0; //! not const!
let scoreNum2 = 0;

//Drop-down & selection
const rounds = document.querySelector("#rounds");

//Buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

//Button-to-number
btn1.addEventListener("click", function () {
	scoreNum1 += 1;
	score1.innerText = scoreNum1;
	gamePoint();
});

btn2.addEventListener("click", function () {
	scoreNum2 += 1;
	score2.innerText = scoreNum2;
	gamePoint();
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
function gamePoint() {
	let matchPtDeterminer = Number(rounds.value);
	if (
		matchPtDeterminer &&
		(scoreNum1 === matchPtDeterminer || scoreNum2 === matchPtDeterminer)
	) {
		showWinner();
	}
}

function showWinner() {
	if (scoreNum1 > scoreNum2) {
		//Color-changes
		score1.style.color = "green";
		score2.style.color = "red";
	} else {
		score1.style.color = "red";
		score2.style.color = "green";
	}
	btn1.disabled = true; //Disabling buttons
	btn2.disabled = true;
}
