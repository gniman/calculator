

// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculateSquareRoot() {
    var input = document.getElementById("display").value;
    var result = Math.sqrt(parseFloat(input));
    document.getElementById("display").value = result;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}