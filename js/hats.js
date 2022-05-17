var firstSection = document.querySelector(".first-section");
var hatSection = document.createElement("div");
var hatDetails = {
    name: 'lorem ipsum',
    price: [[5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
        [5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
        [500, 600, 600, 700, 70000, 100000, 100000, 100000]]
};
var checkOut = document.querySelector(".shopping-cart-list-icon");
var checkOutMobile = document.querySelector(".shopping-cart");
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
        // set id of hatImg
        imageGalleryDiv_1.setAttribute("id", "".concat(scrollMenuId, "-").concat(j));
        // hatImg.classList.add("img");
        // add text to hatSection
        hatDescription.textContent = "hat".concat(j, " is a ").concat(hatDetails.name);
        hatPrice.textContent = "NGN ".concat(hatDetails.price[scrollMenuId - 1][j - 1]);
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
// EVENT LISTENER FOR CART ICON
checkOut.addEventListener("click", function () {
    window.location.href = "./cart.html";
});
checkOutMobile.addEventListener("click", function () {
    window.location.href = "./cart.html";
});
// GETTING STORED DATA ABOUT ITEMS IN CART FROM LOCAL STORAGE
var myCartfromJSON = localStorage.getItem("cartJSON");
var myItems = JSON.parse(myCartfromJSON);
if (myItems == null) {
    myItems = [];
}
else {
    myItems.length;
}
var cartItems = myItems;
// split cartItems object into array
var cartItemsArray = Object.keys(cartItems).map(function (key) {
    return cartItems[key];
});
// if id of imageGalleryDiv is in cartItemsArray, don't add to cart
var imageGalleryDiv = document.querySelectorAll(".image-gallery-div");
for (var i_1 = 0; i_1 < imageGalleryDiv.length; i_1++) {
    var imageGalleryDivId = imageGalleryDiv[i_1].getAttribute("id");
    if (cartItemsArray.includes(imageGalleryDivId)) {
        // add text to button
        imageGalleryDiv[i_1].querySelector("button").textContent = "Added to Cart";
        imageGalleryDiv[i_1].querySelector("button").className = "btn btn-success";
    }
}
checkOut.setAttribute("value", "".concat(myItems.length));
checkOutMobile.setAttribute("value", "".concat(myItems.length));
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.textContent === "Added to Cart") {
            return;
        }
        else {
            btn.textContent = "Added to Cart";
            btn.className = "btn btn-success";
            cartItems.push(btn.parentElement.id);
            var myCartJSON = JSON.stringify(cartItems);
            localStorage.setItem("cartJSON", myCartJSON);
            var myCartfromJSON_1 = localStorage.getItem("cartJSON");
            var myItems_1 = JSON.parse(myCartfromJSON_1);
            checkOut.setAttribute("value", "".concat(myItems_1.length));
            checkOutMobile.setAttribute("value", "".concat(myItems_1.length));
        }
    });
});
//# sourceMappingURL=hats.js.map