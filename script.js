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

/* =========================================
   BUILD FORM
========================================= */

const buildForm = document.getElementById("build-form");
const buildStatus = document.getElementById("build-status");


if (buildForm) {

    buildForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const submitButton =
            buildForm.querySelector(".contact-form__submit");


        submitButton.disabled = true;

        submitButton.innerHTML = "Sending...";


        try {

            const response = await fetch(
                buildForm.action,
                {
                    method: "POST",

                    body: new FormData(buildForm),

                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                window.location.href =
                    "confirmation.html";

            } else {

                buildStatus.textContent =
                    "Something went wrong. Please try again.";

                submitButton.disabled = false;

                submitButton.innerHTML =
                    'Start the Conversation <span>→</span>';

            }

        } catch (error) {

            buildStatus.textContent =
                "Unable to send your request. Please try again.";

            submitButton.disabled = false;

            submitButton.innerHTML =
                'Start the Conversation <span>→</span>';

        }

    });

}

