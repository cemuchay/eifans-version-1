var navbar = document.querySelector(".navbar");
// 👇️ using optional chaining (?.)
var sticky = navbar === null || navbar === void 0 ? void 0 : navbar.offsetTop;
var navMenu = document.querySelector(".menu");
// MAKING NAVBAR STICK TO THE TOP
window.onscroll = function () {
    navbarSticky();
};
var navbarSticky = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
};
var listMenu = function () {
    navMenu.classList.toggle("show-list-menu");
};
//# sourceMappingURL=index.js.map