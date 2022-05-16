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
        hatDescription.textContent = "hat".concat(j, " is a ").concat(hatDetails.name);
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
checkOut.addEventListener("click", function () {
    window.location.href = "./cart.html";
});
checkOutMobile.addEventListener("click", function () {
    window.location.href = "./cart.html";
});
var x = 0;
var myCartfromJSON = localStorage.getItem("cartJSON");
var myItems = JSON.parse(myCartfromJSON);
x = myItems.number;
checkOut.setAttribute("value", "".concat(x));
checkOutMobile.setAttribute("value", "".concat(x));
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.textContent === "Added to Cart") {
            return;
        }
        else {
            btn.textContent = "Added to Cart";
            btn.className = "btn btn-success";
            x += 1;
            var cartItems = { number: x };
            var myCartJSON = JSON.stringify(cartItems);
            localStorage.setItem("cartJSON", myCartJSON);
            var myCartfromJSON_1 = localStorage.getItem("cartJSON");
            var myItems_1 = JSON.parse(myCartfromJSON_1);
            checkOut.setAttribute("value", "".concat(myItems_1.number));
            checkOutMobile.setAttribute("value", "".concat(myItems_1.number));
            // // ADD ITEM DETAILS TO CART
            // let cartItem = document.createElement("div");
            // cartItem.classList.add("cart-item");
            // let cartItemImg = document.createElement("img");
            // let cartItemName = document.createElement("p");
            // let cartItemPrice = document.createElement("p");
            // let cartItemQuantity = document.createElement("p");
            // let cartItemRemove = document.createElement("button");
            // cartItemImg.src = `./images/gallery/display-1-${btn.parentElement.id}.jpg`;
            // cartItemImg.alt = `hat display item ${btn.parentElement.id};`;
            // cartItemName.textContent = `hat${btn.parentElement.id} is a ${hatDetails.name}`;
            // // cartItemPrice.textContent = `NGN ${hatDetails.price[btn.parentElement.id - 1][btn.parentElement.id - 1]}`;
            // cartItemQuantity.textContent = `Quantity: 1`;
            // cartItemRemove.textContent = "Remove";
            // cartItemRemove.classList.add("btn");
            // cartItem.append(cartItemImg, cartItemName, cartItemPrice, cartItemQuantity, cartItemRemove);
            // firstSection.append(cartItem);
            // // REMOVE ITEM FROM CART
            // cartItemRemove.addEventListener("click", () => {
            //     cartItem.remove();
            //     x -= 1;
            //     checkOut.setAttribute("value", `${x}`);
            //     checkOutMobile.setAttribute("value", `${x}`);
            // })
        }
    });
});
//# sourceMappingURL=hats.js.map