var firstSection = document.querySelector(".first-section");
var hatSection = document.createElement("div");
var hatDetails = [
    {
        name: "hat1",
        price: "100",
        img: "img/hat1.jpg",
        description: "hat1 description",
    },
    {
        name: "hat2",
        price: "200",
        img: "img/hat2.jpg",
        description: "hat2 description"
    },
    {
        name: "hat3",
        price: "300",
        img: "img/hat3.jpg",
        description: "hat3 description"
    },
    {
        name: "hat4",
        price: "400",
        img: "img/hat4.jpg",
        description: "hat4 description"
    },
    {
        name: "hat5",
        price: "500",
        img: "img/hat5.jpg",
        description: "hat5 description"
    },
    {
        name: "hat6",
        price: "600",
        img: "img/hat6.jpg",
        description: "hat6 description"
    },
    {
        name: "hat7",
        price: "700",
        img: "img/hat7.jpg",
        description: "hat7 description"
    },
    {
        name: "hat8",
        price: "800",
        img: "img/hat8.jpg",
        description: "hat8 description"
    },
    {
        name: "hat9",
        price: "900",
        img: "img/hat9.jpg",
        description: "hat9 description"
    },
    {
        name: "hat10",
        price: "1000",
        img: "img/hat10.jpg",
        description: "hat10 description"
    },
    {
        name: "hat11",
        price: "1100",
        img: "img/hat11.jpg",
        description: "hat11 description"
    },
    {
        name: "hat12",
        price: "1200",
        img: "img/hat12.jpg",
        description: "hat12 description"
    },
    {
        name: "hat13",
        price: "1300",
        img: "img/hat13.jpg",
        description: "hat13 description"
    }
];
// add class row to hatSection
hatSection.classList.add("row");
var i = 1;
// CREATE ELEMENT DIV WHILE I IS LESS THAN 3 AND ADD CLASS SCROLL-MENU AND ASSIGN EACH A VARIABLE
while (i < 3) {
    // SCROLL MENU
    var scrollMenu = document.createElement("div");
    scrollMenu.classList.add("scroll-menu");
    // append hatSection to firstSection
    firstSection.append(hatSection);
    // append scrollMenu to hatSection
    hatSection.append(scrollMenu);
    // add id to scrollMenu
    scrollMenu.setAttribute("id", "".concat(i));
    // show id of scrollMenu in variable
    var scrollMenuId = scrollMenu.getAttribute("id");
    //    create six divs in scrollMenu
    for (var j = 1; j < 7; j++) {
        var imageGalleryDiv_1 = document.createElement("div");
        imageGalleryDiv_1.classList.add("image-gallery-div");
        scrollMenu.append(imageGalleryDiv_1);
        // for each div in scrollMenu, create img and p
        var hatPrice = document.createElement("p");
        var hatImg = document.createElement("img");
        var hatDescription = document.createElement("p");
        var hatAddToCart = document.createElement("button");
        hatPrice.classList.add("pricetag");
        //add class of image-gallery-div to imageGalleryDiv
        imageGalleryDiv_1.classList.add("image-gallery-div");
        // add src to hatSection // remember ${scrollMenuId}
        hatImg.src = "./images/gallery/display-1-".concat(j, ".jpg");
        //set alt of hatImg
        hatImg.alt = "hat display item ".concat(j, ";");
        // set id of imagegallery div as name
        imageGalleryDiv_1.setAttribute("id", "".concat(hatDetails[j - 1].name));
        // hatImg.classList.add("img");
        // add text to hatSection
        hatDescription.textContent = "hat".concat(j, " is a ").concat(hatDetails[j - 1].description);
        hatPrice.textContent = "NGN ".concat(hatDetails[j - 1].price);
        hatAddToCart.textContent = "Add to Cart";
        hatAddToCart.classList.add("btn");
        //append imageGalleryDiv to scrollMenu
        scrollMenu.append(imageGalleryDiv_1);
        // append scrollMenuText to scrollMenu
        imageGalleryDiv_1.append(hatPrice, hatImg, hatDescription, hatAddToCart);
        // append scrollMenu to hatSection
        hatSection.append(scrollMenu);
    }
    i++;
}
//# sourceMappingURL=hatDisplay.js.map