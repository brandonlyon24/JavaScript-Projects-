//Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//Local variable 
function Add_numbers_3() {
    var y = 11;
    document.write(20 + y + "<br>");
} 
function Add_numbers_4() {
    document.write(y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var A = 20;
    console.log(20 + A + "<br>");
} 
function Add_numbers_6() {
    console.log(A + 100);
}
Add_numbers_5();
Add_numbers_6();

//Time and date, will display message if its before 22
function get_Date() {
    if (new Date().getHours() < 22) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//My own if statemant
function height_Function() {
    if ("Height" > 60) {
        document.write("You are taller than five foot.");
    }
    else document.write("You are shorter than five foot.")
}
//Else statemants
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to drink!";
    }
    else {
        Vote = "You are not old enough to drink.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//Time
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}