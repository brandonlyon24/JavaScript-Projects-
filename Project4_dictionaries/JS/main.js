//Dictionary
function my_Dictionary() {
    var Car = {
        Brand:"Subaru",
        Modle:"Wrx",
        Year:2009,
        Engine:"EJ255",
        Transmission:"Manual",
        Transmission1:"Auto",

    };
    delete Car.Transmission1;
    document.getElementById("Dictionary").innerHTML= Car.Brand +Car.Modle +Car.Year;
}