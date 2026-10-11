const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");


if (menuButton && mobileMenu && overlay) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        menuButton.classList.toggle("active");

    });


    overlay.addEventListener("click", function () {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuButton.classList.remove("active");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}