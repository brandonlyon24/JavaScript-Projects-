function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short " : "You are tall enough";
    document.getElementById("Ride").innerHTML=can_ride + "to ride.";
}
//Voting challage 
function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote kid....." : "Congrats! You can vote!!";
    document.getElementById("Voting").innerHTML=Can_vote;
}
//Keyword and constructors
function Vehicle(Make, Modle, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Modle = Modle;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Modle +
    " manufactured in " + Erik.Vehicle_Year;
}
//Object constructor function
function Family(Name, Age, Gender, Sport) {
    this.Family_Name = Name;
    this.Family_Age = Age;
    this.Family_Gender = Gender;
    this.Family_Sport = Sport;
}
var Brandon = new Family("Brandon", 22, "Male", "Baseball/Basketball");
var Colby = new Family("Colby", 18, "Male", "Basketball");
var Addison = new Family("Addison", 5, "Female", "Dance");
var Zachary = new Family("Zachary", 15, "Male", "Baseball");
//var void = new Family("Void", 20, "Male" "Football")
function my_Function2() {
    document.getElementById("New_and_This").innerHTML="Information about people in my family " + Colby.Family_Name + Colby.Family_Age + Colby.Family_Sport;
}
//Nested functions and counting 
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_Point = 12;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}
