var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var answer = pickAnswerSquare();
var question = document.getElementById("question");
question.textContent = answer;
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    answer = pickAnswerSquare();
    message.textContent = "";
    question.textContent = answer;
    document.querySelector("h1").style.backgroundColor = "rgb(51, 122, 183)";
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
    }
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
});
hard.addEventListener("click", function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    document.querySelector("h1").style.backgroundColor = "rgb(51, 122, 183)";
    answer = pickAnswerSquare();
    message.textContent = "";
    question.textContent = answer;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
    }
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "block";
    }
});
reset.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    answer = pickAnswerSquare();
    reset.textContent = "New Game";
    question.textContent = answer;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    message.textContent = "";
    document.querySelector("h1").style.backgroundColor = "rgb(51, 122, 183)";
});
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if (clickedColor === answer) {
            document.querySelector("h1").style.background = clickedColor;
            reset.textContent = "Play Again?";
            for (var i = 0; i < colors.length; i++) {
                squares[i].style.background = clickedColor;
            }
            message.textContent = "Correct!";
        }
        else {
            this.style.backgroundColor = "#101010";
            message.textContent = "Try Again";
        }
    });
}
function pickAnswerSquare() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// var modeButtons = document.querySelectorAll(".mode");
// for (var i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function () {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.class.add("selected");
//         this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
//         reset();
//     });
// }
// function reset(){
//     colors = generateRandomColors(numSquares);
//     question.textContent=answer;
//     resetButton.textContent = "New Button";
//     messageDisplay.textContent="";
//     for(var i=0;i<squares.length;i++){
//         square[i].style.background = colors[i];
//     }
//     h1.style.background
// }