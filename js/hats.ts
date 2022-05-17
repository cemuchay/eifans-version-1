const firstSection = document.querySelector(".first-section")
const hatSection = document.createElement("div");
const hatDetails = {
    name: 'lorem ipsum',
    price: [[5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
    [5000, 3000, 3500, 1500, 5000, 2000, 2000, 8000],
    [500, 600, 600, 700, 70000, 100000, 100000, 100000]]
};
const checkOut = document.querySelector(".shopping-cart-list-icon");
const checkOutMobile = document.querySelector(".shopping-cart");

// add class row to hatSection
hatSection.classList.add("row");
let i = 1;


// CREATE ELEMENT DIV WHILE I IS LESS THAN 3 AND ADD CLASS SCROLL-MENU AND ASSIGN EACH A VARIABLE

while (i < 3) {
    // SCROLL MENU
    let scrollMenu = document.createElement("div");
    scrollMenu.classList.add("scroll-menu");

    // append hatSection to firstSection
    firstSection.append(hatSection);
    // append scrollMenu to hatSection
    hatSection.append(scrollMenu);
    // add id to scrollMenu
    scrollMenu.setAttribute("id", `${i}`);
    // show id of scrollMenu in variable
    let scrollMenuId: any = scrollMenu.getAttribute("id");

    //    create six divs in scrollMenu
    for (let j = 1; j < 7; j++) {
        let imageGalleryDiv = document.createElement("div");
        imageGalleryDiv.classList.add("image-gallery-div");
        scrollMenu.append(imageGalleryDiv);
        // for each div in scrollMenu, create img and p
        let hatPrice = document.createElement("p");
        let hatImg = document.createElement("img");
        let hatDescription = document.createElement("p");
        let hatAddToCart = document.createElement("button");
        hatPrice.classList.add("pricetag");

        //add class of image-gallery-div to imageGalleryDiv
        imageGalleryDiv.classList.add("image-gallery-div");

        // add src to hatSection // remember ${scrollMenuId}
        hatImg.src = `./images/gallery/display-1-${j}.jpg`;

        //set alt of hatImg
        hatImg.alt = `hat display item ${j};`

        // set id of hatImg
        imageGalleryDiv.setAttribute("id", `${scrollMenuId}-${j}`);


        // hatImg.classList.add("img");
        // add text to hatSection

        hatDescription.textContent = `hat${j} is a ${hatDetails.name}`;

        hatPrice.textContent = `NGN ${hatDetails.price[scrollMenuId - 1][j - 1]}`;

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

