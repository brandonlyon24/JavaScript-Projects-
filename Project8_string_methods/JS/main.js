//Concatenate
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//Slice() Method
function slice_Method() {
    var Sentence = "My name is Brandon Lyon I am 22 years old.";
    var Section = Sentence.slice(11,24);
    document.getElementById("Slice").innerHTML = Section;
}
  // toUppercase method
  function uppercase_Function() {
    var text = document.getElementById("Uppercase").innerHTML;
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();
  }
  //Search() method
  function Search_Function() {
    var str = "Hello my name is Brandon lyon. How are you?";
    var pos = str.search("Brandon");
    document.getElementById("search").innerHTML=pos;
  }
  //Number methods toString()
  function string_Method() {
      var X = 182;
      document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }
  //ToPRECISION() method
  function precision_Method() {
      var X = 12938.3012987376112;
      document.getElementById("Precision").innerHTML = X.toPrecision(10);
  }
//toFixed method
function decimal_Function() {
    var num = 4009.624332169775;
    var n = num.toFixed(3);
    document.getElementById("Decimal").innerHTML = n;
  }

  function value_Function() {
    var num = 299;
    var n = num.valueOf()
    document.getElementById("Value").innerHTML = n;
  }