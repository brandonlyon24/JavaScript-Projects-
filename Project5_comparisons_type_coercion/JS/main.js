//All my doc.write at the top 
document.write(typeof "Word");
document.write(typeof 3);
//True or False
document.write(10 > 2);
document.write(10 < 2);
//Infinity
document.write(2E310);
document.write(-3e310);
//Coercion
document.write("10" + 5);
//Double equal sign
document.write(20 + 10 == 30);
document.write(25 - 2 == 24);
//Triple equal sign
x = 20;
y = 20;
document.write(x===y);
X = 30;
Y = "30";
document.write(X === Y);
//Locgical operators 
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

//start of functions
function infinity_Function() {
    document.getElementById("Infinity").innerHTML= 5E410;
}
function negitive_infinity_Function() {
    document.getElementById("Negitive_Infinity").innerHTML= -2E410;
}
//Displays NaN
function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
}
//Displays True becuase its a string
function my_Function2() {
    document.getElementById("Test2").innerHTML= isNaN('This is a string!!'); 
}
//Displays false becuase its a number 
function my_Function3() {
    document.getElementById("Test3").innerHTML= isNaN('007');
}
//Not operator 
function not_Function() {
    document.getElementById("Not").innerHTML=!(5 > 10);
}
function not_Function2() {
    document.getElementById("Not2").innerHTML=!(25 > 10);
}
//console log
console.log(20 + 50);
console.log(100 < 65);




