const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hambuergerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("iconClose");

let isOpen = false;

hamburgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        hambuergerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");

        document.body.style.overflow = "hidden";
    }else {
            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("translate-x-full");

            hambuergerIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");

            document.body.style.overflow = "";
        }
    }
)