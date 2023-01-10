// TODO: QUERY ELEMENTS
const changeBtn = document.getElementById("change-btn");
const background = document.getElementById("background");
const colorText = document.getElementById("color-txt");
const likeBtn = document.getElementById("like-btn");

const filledLikeButton = "./icons/heart-filled.svg";
const emptyLikeButton = "./icons/heart-empty.svg";

const favItem = `
<div class="fav-item">
<div class="left-side">
    <div class="color-display"></div>
    <p class="fav-color">#575757</p>
</div>
<div class="buttons">
    <image
        id="fav-btn"
        class="like"
        src="./icons/delete-icon.svg"
    ></image>
    <image
        id="fav-btn"
        class="like"
        src="./icons/heart-filled.svg"
    ></image>
</div>
</div>
`;

//  TODO: COLOR GENERATION
//  Have array of all possible hex values
const hexValues = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

let currentHex = "#575757";

//  Generate random hex color
//  Return random hex color
function generateRandomHex() {
	randomHex = "#";

	for (let i = 0; i < 6; i++) {
		randomHex += hexValues[Math.floor(Math.random() * hexValues.length)];
	}

	currentHex = randomHex;

	return randomHex;
}

//  TODO: CHANGING VALUES
// Listening for click events on the change button
changeBtn.addEventListener("click", () => {
	generateRandomHex();
	//  Change backgroudn color to hex color
	background.style.background = currentHex;
	//  Change text to hex color
	colorText.innerText = currentHex;
	resetButtonFill();
});

//  TODO: FAVORITES FUNCTIONALITY
//  Have an empty array of favorites
let favoritesList = [];

//  When the like button is clicked ->
//      Check if favorites list contains the current hex code
//      If it's not ->
//          Change like button to filled
//          Add current hex color to favorites
//      If it is ->
//          Change like button to empty
//          Remove current hex color from favorites
likeBtn.addEventListener("click", () => {
	let contains = false;
	for (let i = 0; i < favoritesList.length; i++) {
		if (favoritesList[i] == currentHex) {
			contains = true;
		} else {
			contains = false;
		}
	}

	if (!contains) {
		favoritesList.push(currentHex);
		likeBtn.src = filledLikeButton;
	} else {
		favoritesList.pop(currentHex);
		likeBtn.src = emptyLikeButton;
	}
});

//  TODO: Reset like button on color change
//  When the change button is clicked ->
//      Check if the current hex is in the favorites list
//      If it is
//          Change like button to filled
//      If it's not
//          Change like button to empty
function resetButtonFill() {
	likeBtn.src = emptyLikeButton;
}
