var firstSection = document.querySelector(".first-section");
var hatSection = document.createElement("div");
var hatDetails = {
    name: '500',
    price: [[5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
        [5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
        [500, 600, 600, 700, 70000, 100000, 100000, 100000]]
};
// add class row to hatSection
hatSection.classList.add("row");
var i = 1;
//create element div while i is less than 3 and add class scroll-menu and assign each a variable
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
        var imageGalleryDiv = document.createElement("div");
        imageGalleryDiv.classList.add("image-gallery-div");
        scrollMenu.append(imageGalleryDiv);
        // for each div in scrollMenu, create img and p
        var hatPrice = document.createElement("p");
        var hatImg = document.createElement("img");
        var hatDescription = document.createElement("p");
        var hatAddToCart = document.createElement("button");
        hatPrice.classList.add("pricetag");
        //add class of image-gallery-div to imageGalleryDiv
        imageGalleryDiv.classList.add("image-gallery-div");
        // add src to hatSection // remember ${scrollMenuId}
        hatImg.src = "./images/gallery/display-1-".concat(j, ".jpg");
        //set alt of hatImg
        hatImg.alt = "hat display item ".concat(j, ";");
        // hatImg.classList.add("img");
        // add text to hatSection
        hatDescription.textContent = "hat".concat(j);
        hatPrice.textContent = "NGN ".concat(hatDetails.price[scrollMenuId - 1][j - 1]);
        hatAddToCart.textContent = "Add to Cart";
        hatAddToCart.classList.add("btn");
        //append imageGalleryDiv to scrollMenu
        scrollMenu.append(imageGalleryDiv);
        // append scrollMenuText to scrollMenu
        imageGalleryDiv.append(hatPrice, hatImg, hatDescription, hatAddToCart);
        // append scrollMenu to hatSection
        hatSection.append(scrollMenu);
    }
    i++;
}
//# sourceMappingURL=hats.js.map