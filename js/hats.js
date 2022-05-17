var checkOut = document.querySelector(".shopping-cart-list-icon");
var checkOutMobile = document.querySelector(".shopping-cart");
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