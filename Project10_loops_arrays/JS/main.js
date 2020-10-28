//While loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//Used to figure out how long my var str is
function string_length() {
    var str = "My name is brandon lyon and I want to know the length of this string.";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
  }
//For loop
var Instrumnets = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Plute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instrumnets.length; Y++) {
        Content += Instrumnets[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Array
function array_Function() {
    var Car_Picture = [];
    Car_Picture[0] = "Rwb 911";
    Car_Picture[1] = "Mazda rx-7";
    Car_Picture[2] = "Subaru sti";
    Car_Picture[3] = "Toyota Supra";
    document.getElementById("Array").innerHTML = "The car in this picture is " +
    Car_Picture[2] + ".";
}
//constant function
function constant_Function() {
    const Subaru_wrx = {type:"Wrx ", body:"Hatchback ", transmission:"Manual ", color:"Red "};
    Subaru_wrx.price = "$15,000 ";
    Subaru_wrx.year = "2009 ";
    Subaru_wrx.color = "Black " //Changing the color to black
    document.getElementById("Constant").innerHTML = "The cost of a Subaru " +
    Subaru_wrx.type + "is around " + Subaru_wrx.price + "and the color " + Subaru_wrx.color;
}
//Return statement        
//var C = return_Function(4,3)
//function return_Function(a, b) {
//    return a * b;
//}
//console.log(C);
//Let function
//var X = 100; 
//document.write(X);
//{
 //   let X = 50;
 //   document.write(X);
//}
//document.write(X);
 //Objects
 let car = {
     make: "Dodge",
     modle: "Viper",
     year: "2021",
     color: "red",
     description : function () {
         return "The car is a " + this.year + this.color + this.make + this.modle;
     }
    };
 document.getElementById("Car_Object").innerHTML = car.description();



