//generate random numbers
function getRandomNumber(){
    let minNum = 0;
    let maxNum = 99;
    let choice = document.getElementById("operationChoice");
    let option = choice.options[choice.selectedIndex].innerHTML;

    switch(option){
        case "multiplication":
            maxNum = 12;
            break;
//TODO: find way to generate divisible numbers, make sure subtraction results in positive or 0
        case "division":
            minNum = 1;
            maxNum = 144;
            break;
    }
    return Math.floor(Math.random() * (maxNum + 1) + minNum); 
}

//assign random numbers to top and bottom
function getProblem(){
    let choice = document.getElementById("operationChoice");
    let option = choice.options[choice.selectedIndex].innerHTML;
    let topNumber = document.getElementById("problemTop").innerHTML;
    let bottomNumber = $("#bottomNumber").text();
    
    $("#problemTop").html(getRandomNumber());
    $("#bottomNumber").html(getRandomNumber());
    $("#answerBox").val("");
}

//choose which operation to practice based on user input
function chooseOperation(selTag){
    getProblem();
    const selected = selTag.options[selTag.selectedIndex].text;
    
    switch(selected){
        case "addition":
            $("#operation").html("+");
            break;
        case "subtraction":
            $("#operation").html("-");
            break;
        case "multiplication":
            $("#operation").html("x");
            break;
        case "division":
            $("#operation").html("÷");
            break;
    };
}

//submit answer with enter key
const input = document.getElementById("answerBox");
input.addEventListener("keyup",function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        $("#checkAnswer").click();
    };
});

//highlights accuracy count in green, gets new problem
function markCorrect(){
    $("body").addClass("green").removeClass("red");
    return getProblem();
}

//highlights accuracy count in red, clears input field
function markIncorrect(){
    $("body").addClass("red").removeClass("green");
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
}


window.onload = getProblem();