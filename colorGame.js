var colors = [];
var pickedColor;
var numSquares = 9;

var squares = document.getElementsByClassName("square");
var colorDisplay = document.querySelector('.color-display');
var messageDisplay = document.querySelector(".message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.getElementsByClassName("mode");
var selected = document.querySelector(".selected");

init();

function init(){
    setUpModeBtns();
    setUpSquares();
    reset();
}

h1.style.background = "#4682b4";

//colorDisplay.textContent = pickedColor;



function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#4682b4";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}


resetButton.addEventListener('click', function () {
    reset();
});

function setUpSquares (){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        //add listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
            }else{
                this.style.background ="#232323";
                messageDisplay.textContent = "try again";
            }
        });
    }
}

function setUpModeBtns() {
    for(var i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            this.classList.add('selected');
            if (this.textContent==="Easy"){
                numSquares = 3;
            }else if (this.textContent ==="Normal") {
                numSquares = 6;
            }else{
                numSquares = 9;
            }
            reset();
        });
    }
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors (num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb_color = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb_color;
}
