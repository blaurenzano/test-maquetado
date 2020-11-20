let acordeon = document.getElementsByClassName('acordeon');
let i;
for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', function(){
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    });
}