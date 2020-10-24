
function Button_1() { //click button to turn the text red
    var str = "Welcome to Brandons website, Im learning how to use JavaScript!";
    var result = str.fontcolor("red")
    document.getElementById("Red_text") .innerHTML = result;
}
var A = "This is a string"
document.write(A)

function Concatenate_Function() { //This connects the two sentances 
    var sentance = "I am learning how to ";
    sentance += "concatenate a sentance.";
    document.getElementById("Concatenate").innerHTML=sentance;
}