//generate random numbers
function getRandomNumber(){
    const minNum = 0;
    const maxNum = 100;
    return Math.floor(Math.random() * (maxNum +1) + minNum);
    
}
//assign random numbers to top and bottom
function getProblem(){
    document.getElementById("problemTop").innerHTML = getRandomNumber();
    document.getElementById("bottomNumber").innerHTML = getRandomNumber();
    document.getElementById("answerBox").value = "";
}
//read top, bottom, and answer numbers to tell user if answer is correct
function checkAnswer(){
    let topNumber = document.getElementById("problemTop").innerHTML;
    let bottomNumber = document.getElementById("bottomNumber").innerHTML;
    let answer = document.getElementById("answerBox").value;

    if(Number(topNumber) + Number(bottomNumber) == Number(answer)){
        alert("Nice!");
        return getProblem();
    } else {
        alert("Try again!");
    }
}

window.onload = getProblem;