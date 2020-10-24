//Dictionary
function my_Dictionary() {
    var Car = {
        Brand:"Subaru",
        Modle:"Wrx",
        Year:2009,
        Engine:"EJ255",
        Transmission:"Manual",
    };
    delete Car.Brand; //This deletes transmission
    document.getElementById("Dictionary").innerHTML= Car.Brand +Car.Transmission +Car.Modle +Car.Year;
}