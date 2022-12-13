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
			score1.classList.add("winner");
			score2.classList.add("loser");
		}
		score1.innerText = scoreNum1;
	}
});

btn2.addEventListener("click", function () {
	if (!isGameOver) {
		scoreNum2 += 1;
		if (scoreNum2 === matchPtDeterminer) {
			isGameOver = true;
			score1.classList.add("loser");
			score2.classList.add("winner");
		}
		score2.innerText = scoreNum2;
	}
});

//Reset
btn3.addEventListener("click", reset); //We don't add () since WE are not executing it, we're just "passing the reference"; the eventListener will execute it.

//Dropdown match-point selector
rounds.addEventListener("change", function () {
	matchPtDeterminer = Number(this.value); //Colt uses parseInt(), but I use Number since we just need the type converted, we don't need any decimals removed.
	reset(); //Colt put this here because he wants the game to reset if you change the dropdown. IDK if I want that though.
	//We DO need to execute it here--i.e. adding ()--since the event listener can only execute the anonymous function we passed it, it can't execute functions within that function.
});

function reset() {
	isGameOver = false;
	scoreNum1 = 0;
	scoreNum2 = 0;
	score1.innerText = "0";
	score2.innerText = "0";
	score1.classList.remove("winner", "loser");
	score2.classList.remove("winner", "loser"); //can simultaneously tell it remove both potential classes, whichever it finds.

	// SKM "main" functioning code
	// rounds.selectedIndex = 0;
}
