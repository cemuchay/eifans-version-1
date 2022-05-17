const checkOut = document.querySelector(".shopping-cart-list-icon");
const checkOutMobile = document.querySelector(".shopping-cart");

// EVENT LISTENER FOR CART ICON

checkOut.addEventListener("click", () => {
    window.location.href = "./cart.html";
})

checkOutMobile.addEventListener("click", () => {
    window.location.href = "./cart.html";
})

// GETTING STORED DATA ABOUT ITEMS IN CART FROM LOCAL STORAGE

let myCartfromJSON = localStorage.getItem("cartJSON");
let myItems = JSON.parse(myCartfromJSON);


if (myItems == null) {
    myItems = [];
}
else {
    myItems.length;
}

let cartItems = myItems;


// split cartItems object into array
let cartItemsArray = Object.keys(cartItems).map((key) => {
    return cartItems[key];
});


// if id of imageGalleryDiv is in cartItemsArray, don't add to cart
let imageGalleryDiv = document.querySelectorAll(".image-gallery-div");


for (let i = 0; i < imageGalleryDiv.length; i++) {
    let imageGalleryDivId = imageGalleryDiv[i].getAttribute("id");
    if (cartItemsArray.includes(imageGalleryDivId)) {

        // add text to button
        imageGalleryDiv[i].querySelector("button").textContent = "Added to Cart";
        imageGalleryDiv[i].querySelector("button").className = "btn btn-success";
    }
}


checkOut.setAttribute("value", `${myItems.length}`);
checkOutMobile.setAttribute("value", `${myItems.length}`);



document.querySelectorAll<HTMLElement>(".btn").forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "Added to Cart") {
            return;
        }
        else {
            btn.textContent = "Added to Cart";
            btn.className = "btn btn-success";

            cartItems.push(btn.parentElement.id);
            let myCartJSON = JSON.stringify(cartItems);
            localStorage.setItem("cartJSON", myCartJSON);


            let myCartfromJSON = localStorage.getItem("cartJSON");
            let myItems = JSON.parse(myCartfromJSON);


            checkOut.setAttribute("value", `${myItems.length}`);
            checkOutMobile.setAttribute("value", `${myItems.length}`);


        }
    })
})

