const togglerOpen = document.getElementById("toggler-open");
const togglerClose = document.getElementById("toggler-close");
const mobileDropDown = document.getElementById("mobile-dropdown");

togglerOpen.addEventListener("click", () => {
    mobileDropDown.style.display = "block";
    mobileDropDown.classList.remove("remove-animation");
    mobileDropDown.classList.add("animate-mobile");
});

togglerClose.addEventListener("click", () => {
    mobileDropDown.classList.remove("animate-mobile");
    mobileDropDown.classList.add("remove-animation");
    setTimeout(() => {
        mobileDropDown.style.display = "none";
    }, 1000)
});

// mobile links


// footer
const currentYear = new Date().getFullYear();
const pElement = document.getElementById("year");
pElement.textContent = currentYear;

// Mobile
