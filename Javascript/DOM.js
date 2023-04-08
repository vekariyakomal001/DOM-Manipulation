function addToList(){
    newLi = document.createElement("li");

    newText = document.createTextNode("This is some text");

    newLi.appendChild(newText);

    ul = document.querySelector("#mine");

    ul.appendChild(newLi);
}
document.getElementById("innertext").innerHTML = document.lastModified;
document.getElementById("demo1").innerHTML = "The title of this document is " + document.title;
var date = new Date();
document.getElementById("date").innerHTML = date;

function myFunction(){
    document.open("text/html","replace");
    document.write("This is replacement content");
    document.close();
}
    
