//addition function
function Math_Function() {
    var x = 10;
    var y = 20;
    var math = 10 + 20;
    document.getElementById("Math").innerHTML = "10 + 20 = " + math;
}
//subtraction function
function Subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
}
//multiplication function
function Multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + simple_Math;
}
//division function
function Division() {
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;
}
//multiple operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("more_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
//modulus operator function
function modulus_Operator() {
    var simple_Math = 50 % 3;
    document.getElementById("modulus_Operator").innerHTML="When you divide 50 by 3 you have a remainder of: "+simple_Math;
}
//Unary operator 
function negation_Operator() {
    var X = 10;
    document.getElementById("negation_Operator").innerHTML=--X;
}
function increment_Operator() {
var W = 5;
W++;
document.getElementById("increment_Operator").innerHTML= W;
}
var Y = 8;
Y++;
document.write(Y);
window.alert(Math.random() * 100);

function Power() {
    var a = Math.pow(5,3);
    var x = a
    document.getElementById("Power").innerHTML=x;
}