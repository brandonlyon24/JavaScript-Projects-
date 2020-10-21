window.alert("Hello world Welcome!!"); // first pop up window 
document.write('Im using javascript!! Im testing how this works.');
var A = "This is my string."; //string
document.write(A);
var X = "Brandon" + " " + "Lyon"; // how to add to things together 
window.alert(X); // second pop up window 
document.write("This is a string and it contain\'s an apostrphe. Sting\'s are \"cool\"."); //learning  how to use ',"",/
document.write("Brandon lyon is 22 years old and he loves to ride his dirt bike."
+ "He loves riding at the dunes over in florance oregon."
+ "He also like riding trails over at big lake in sisters oregon.");
var B = "Subaru" + "-" + "Wrx";
document.write(B)

var Family = "The Lyon\'s", Dad = "Jay", Mom = "Alicia", Brothers = "Brandon, Trevor, Colby, Zach";
var Family = Family.fontcolor("red");
var Brothers = Brothers.fontcolor("blue")
document.write(Family)
document.write(Brothers)
document.write(3+3+4-2)

function My_First_Function() {   //function button, after click turns text greeen
    var str = "This text is green";
    var result = str.fontcolor("green")
    document.getElementById("Green_Text").innerHTML = result;
}