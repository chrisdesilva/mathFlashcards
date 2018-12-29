//counters for accuracy display
let correct = 0;
let total = 0;

//generate random numbers
let minNum = 0;
let maxNum = 99;
function getRandomNumber(){
    let opSymbol = $("#operation").html();
    let first = $("#problemTop").html();
    let second = $("#bottomNumber").html();

    return Math.floor(Math.random() * (maxNum + 1) + minNum);
}

$("#addition").on('click', function(e){
    $("#operation").html("+");
    minNum = 0;
    maxNum = 99;
    getProblem();
})

$("#subtraction").on('click', function(e){
    $("#operation").html("-");
    getProblem();
})

$("#multiplication").on('click', function(e){
    $("#operation").html("x");
    maxNum = 12;
    getProblem();
})

$("#division").on('click', function(e){
    $("#operation").html("÷");
    minNum = 1;
    maxNum = 144;
    getProblem();
})

//assign random numbers to top and bottom
function getProblem(){
    let topNumber = document.getElementById("problemTop").innerHTML;
    let bottomNumber = $("#bottomNumber").text();    

    $("#problemTop").html(getRandomNumber());
    $("#bottomNumber").html(getRandomNumber());
    $("#answerBox").val("");
}

//submit answer with enter key
const input = document.getElementById("answerBox");
input.addEventListener("keyup",function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        $("#checkAnswer").click();
    };
});

//increment both correct and total counters after correct answer
function countCorrect(){
    correct++;
    return correct;
}

//increment total counter after incorrect answer
function countTotal(){
    total++;
    return total;
}

//highlights accuracy count in green, gets new problem
function markCorrect(){
    $(".card").addClass("green").removeClass("red");
    $("#feedback").html("Nice!");
    countCorrect();
    countTotal();
    return getProblem();
}

//highlights accuracy count in red, clears input field
function markIncorrect(){
    $(".card").addClass("red").removeClass("green");
    $("#feedback").html("Try again!");
    countTotal();
    $("#answerBox").val("");
}

//check problem type, then tell user if answer is correct
function checkAnswer(){
    let operation = $("#operation").html();
    let topNumber = $("#problemTop").html();
    let bottomNumber = $("#bottomNumber").html();
    let answer = $("#answerBox").val();

//TODO: update correct and total after each question
    
    switch(operation){
        case "+":       
            if(Number(topNumber) + Number(bottomNumber) === Number(answer)){
                markCorrect();
            } else {
                markIncorrect();
            };
            break;
        case "-":
            if(Number(topNumber) - Number(bottomNumber) === Number(answer)){
                markCorrect();
            } else {
                markIncorrect();
            };
            break;
        case "x":
            if(Number(topNumber) * Number(bottomNumber) === Number(answer)){
                markCorrect();
            } else {
                markIncorrect();
            };
            break;
        case "÷":
            if(Number(topNumber) / Number(bottomNumber) === Number(answer)){
                markCorrect();
            } else {
                markIncorrect();
            };
            break;
    };

    return $("#accuracy").html("Accuracy: " + Math.floor((correct/total)*100) + "%");
}


window.onload = getProblem();