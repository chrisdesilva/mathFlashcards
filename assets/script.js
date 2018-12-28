function getRandomNumber(){
    const minNum = 0;
    const maxNum = 12;
    return Math.floor(Math.random() * (maxNum +1) + minNum)
}

function getProblem(){
    document.getElementById("problemTop").innerHTML = getRandomNumber();
    document.getElementById("bottomNumber").innerHTML = getRandomNumber();
}



window.onload = getProblem;