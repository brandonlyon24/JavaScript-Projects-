//addition function
function Math_Function() {
    var x = 10;
    var y = 20;
    var math = 10 + 20;
    document.getElementById("Math").innerHTML = "10 + 20 = " + math;
}
function Math_Return_Function() {
    return 10 + 20;
}
var A = Math_Return_Function() ;
console.logMath_Return_Function()
//subtraction function

function Subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2" + Subtraction;
}
function Subtraction_Return_Function() {
    return 5 - 2;
}

var B = Subtraction_Function();
console.logMath_Return_Subtraction()
//multiplication function

function Multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}
function Multiplication_Return_Function(){
    return 6 * 8;
}

//division function

function Division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}
function Division_Return_Function() {
    return 48 / 6;
}

//multiple operations

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
function more_Math_Return_Function() {
    return (1 + 2) * 10 / 2 - 5; 
}

//modulus operator function
function modulus_Operator() {
    var simple_Math = 50 % 3;
    document.getElementById("Math").innerHTML="When you divide 50 by 3 you have a remainder of: "+simple_Math;
}
function modulus_Operator_Return_Function() {
    return  50 % 3;
}

//Unary operator 
function negation_Operator() {
    var X = 10;
    document.getElementById("Math").innerHTML=-x;
}
function negation_Operator_Return_Function() {
    return -10;
}

function increment_Operator() {
var W = 5;
W++;
document.getElementById("Math").innerHTML="5++"+simple_Math;
}
function increment_Operator_Return_Function() {
    return W;
}
var Y = 8;
Y++;
document.write(Y);

window.alert(Math.random() * 100);