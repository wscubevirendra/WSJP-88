var toggleBtn = document.querySelector("#toggleBtn");
var navBar = document.querySelector(".container nav ul ");
var menuOverlay = document.querySelector(".menu-overlay");
console.log(menuOverlay)


toggleBtn.addEventListener(
    "click",
    function () {
        navBar.classList.add("open");
        menuOverlay.classList.add("bg-overlay-open");
    }
)

menuOverlay.addEventListener(
    "click",
    function () {
        navBar.classList.remove("open");
        menuOverlay.classList.remove("bg-overlay-open");

    }
)


document.addEventListener(
    "scroll",
    function (e) {

        if (window.scrollY > 49) {
            document.body.classList.add("stick")
        } else {
            document.body.classList.remove("stick")
        }
    }
)


$('.responsive').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});