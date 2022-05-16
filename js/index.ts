const navbar = document.querySelector(".navbar") as HTMLElement | null;
// 👇️ using optional chaining (?.)
const sticky = navbar?.offsetTop;
const navMenu = document.querySelector(".menu");

// MAKING NAVBAR STICK TO THE TOP
window.onscroll = function () {
    navbarSticky()
};

let navbarSticky = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

let listMenu = () => {
    navMenu.classList.toggle("show-list-menu")
}

