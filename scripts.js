
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var body = document.getElementById("cuerpo")


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    body.classList.add("stickybody");

  } else {
    header.classList.remove("sticky");
    body.classList.remove("stickybody");
  }
}

