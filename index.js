import './styles/index.scss';



 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (self.pageYOffset > 400){
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("navbar").style.top = "0";
   } else {
     document.getElementById("navbar").style.top = "-100px";
   }

   prevScrollpos = currentScrollPos;
}
 }