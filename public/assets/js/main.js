// JavaScript
function toggleMenu() {
    var nav = document.getElementById("sidebar");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}


let open_btn = document.getElementById('open-menu-btn')
open_btn.addEventListener("click", toggleMenu)

let close_btn = document.getElementById('close-menu-btn')
close_btn.addEventListener("click", toggleMenu)