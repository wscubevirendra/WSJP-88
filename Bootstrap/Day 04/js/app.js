var myNav = document.querySelector(".my-nav");
var openMenu=document.querySelector(".open-menu");




openMenu.addEventListener(
    "click",
    function () {
        myNav.classList.add("show")
    }
)