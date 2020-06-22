//function to create a new item
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    //validates that the user provides input
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("toDoList").appendChild(li).innerHTML;
    }
    document.getElementById("listInput").value = "";
//inserts x next to the item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var x;
for (x = 0; x < close.length; x++) {
    close[x].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
