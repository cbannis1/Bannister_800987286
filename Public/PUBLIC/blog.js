function background1() {
    document.getElementById("myBody").style.background = "url('./simple.jpg') no-repeat";
}
function background2() {
    document.getElementById("myBody").style.background = "url('./gradient.png') no-repeat";
}

function bigger(){
    document.getElementById("myBody").style.fontSize = "2.0em";
}
function smaller(){
    document.getElementById("myBody").style.fontSize = "1.0em";
}

// function addPost(){
//     var li = document.createElement("li");
//     var title = document.getElementById("title").value;
//     var content = document.getElementById("content").value;
//     var t = document.createTextNode(title);
//     li.appendChild(t);
//     var c = document.createTextNode(content);
//     li.appendChild(c)
//      document.getElementById("blogPost").appendChild(li).innerHTML;

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }
// var close = document.getElementsByClassName("close");
// var x;
// for (x = 0; x < close.length; x++) {
//     close[x].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }






