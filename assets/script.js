let topNumber = 0;
let bottomNumber = 0;
let divisor = 0;
let dividend = 0;
let opSym = $("#operation");
let problemTop = $("#problemTop");
let problemBottom = $("#bottomNumber");

//generate top and bottom numbers for addition, subtraction, and multiplication problems
function generateTop(min, max){
    topNumber = Math.floor(Math.random() * (max - min) + min);
    if(topNumber < 10){
        topNumber = "0" + topNumber;
    }
    return topNumber;
}

function generateBottom(min, max){
    bottomNumber = Math.floor(Math.random() * (max - min) + min);
    if(bottomNumber < 10){
        bottomNumber = "0" + bottomNumber;
    }
    
    return bottomNumber;
}

//generate random numbers for division problems; dividend is top number, divisor is bottom
function generateDividend(min, max){
    dividend = Math.floor(Math.random() * (max - min) + min);
    if(dividend < 10){
        dividend = "0" + dividend;
    }
    return dividend;
}

function generateDivisor(min, max){
    divisor = Math.floor(Math.random() * (max - min) + min);
    if(divisor < 10){
        divisor = "0" + divisor;
    }
    if(dividend % divisor){
        generateDivisor(min, max);
    }
    
    return divisor;
}

function getProblem(){
    
    switch(opSym.html()){
        case "+":
            addition();
            break;
        case "-":
            subtraction();
            break;
        case "x":
            multiplication();
            break;
        case "÷":
            division();
            break;  
    };
}

function addition(){
    problemTop.html(generateTop(0, 100));
    problemBottom.html(generateBottom(0, 100));
    opSym.html("+");
    
    $("#addition").on('click', function(e){
        opSym.html("+");
        problemTop.html(generateTop(0, 100));
        problemBottom.html(generateBottom(0, 100));
    });
}

function subtraction(){
    problemTop.html(generateTop(0, 100));
    problemBottom.html(generateBottom(0, topNumber));
    opSym.html("-");

    $("#subtraction").on('click', function(e){
        opSym.html("-");
        problemTop.html(generateTop(0, 100));
        problemBottom.html(generateBottom(0, topNumber));
    });
}

function multiplication(){
    problemTop.html(generateTop(0, 15));
    problemBottom.html(generateBottom(0, 15));
    opSym.html("x");

    $("#multiplication").on('click', function(e){
        opSym.html("x");
        problemTop.html(generateTop(0, 12));
        problemBottom.html(generateBottom(0, 12));
    });
}

function division(){
    problemTop.html(generateDividend(1, divisor * 12));
    problemBottom.html(generateDivisor(1, 12));
    opSym.html("÷");

    $("#division").on('click', function(e){
        problemTop.html(generateDividend(1, divisor * 12));
        problemBottom.html(generateDivisor(1, 12));
        opSym.html("÷");
    });
}


//submit answer with enter key
const input = document.getElementById("answerBox");
input.addEventListener("keyup",function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        $("#checkAnswer").click();
    };
});

//counters for accuracy display
let correct = 0;
let total = 0;

//increment both correct and total counters after correct answer
function countCorrect(){
    correct++;
    return correct;
}

//increment total counter after incorrect answer
function countTotal(){
    total++;
    $("#totalAnswered").html("Answered: " + total);
    return total;
}

//highlights accuracy count in green, gets new problem
function markCorrect(){
    $(".card").addClass("green").removeClass("red");
    $("#feedback").html("Nice!");
    countCorrect();
    countTotal();
    $("#answerBox").val("");
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
                addition();
            } else {
                markIncorrect();
            };
            break;
        case "-":
            if(Number(topNumber) - Number(bottomNumber) === Number(answer)){
                markCorrect();
                subtraction();
            } else {
                markIncorrect();
            };
            break;
        case "x":
            if(Number(topNumber) * Number(bottomNumber) === Number(answer)){
                markCorrect();
                multiplication();
            } else {
                markIncorrect();
            };
            break;
        case "÷":
            if(Number(topNumber) / Number(bottomNumber) === Number(answer)){
                markCorrect();
                division();
            } else {
                markIncorrect();
            };
            break;
    };

    return $("#accuracy").html("Accuracy: " + Math.floor((correct/total)*100) + "%");
}


window.onload = division(), subtraction(), multiplication(), addition() 