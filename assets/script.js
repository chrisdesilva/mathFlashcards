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

//choose which operation to practice based on user input
function chooseOperation(selTag){
    getProblem();
    const selected = selTag.options[selTag.selectedIndex].text;
    
    if(selected == "addition"){
        document.getElementById("operation").innerHTML = "+";
    } else if (selected === "subtraction"){
        document.getElementById("operation").innerHTML = "-";
    } else if (selected === "multiplication"){
        document.getElementById("operation").innerHTML = "x";
    } else if (selected === "division"){
        document.getElementById("operation").innerHTML = "÷";
    } else if (selected === "random"){
        const opArr = ["+", "-", "x", "÷"];
        const randomOp = opArr[Math.floor(Math.random()*opArr.length)];
        document.getElementById("operation").innerHTML = randomOp;
    }
}

//check if addition problem is correct
function checkAddition(){
    let topNumber = document.getElementById("problemTop").innerHTML;
    let bottomNumber = document.getElementById("bottomNumber").innerHTML;
    let answer = document.getElementById("answerBox").value;

    if(Number(topNumber) + Number(bottomNumber) === Number(answer)){
        alert("Nice!");
        return getProblem();
    } else {
        alert("Try again!");
    }
}
//check problem type, then read top, bottom, and answer numbers to tell user if answer is correct
function checkAnswer(){
    let operation = document.getElementById("operation").innerHTML;
    if(operation === "+"){
        checkAddition()
    }
}

window.onload = getProblem;