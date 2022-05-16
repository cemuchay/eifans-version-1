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


//create element div while i is less than 3 and add class scroll-menu and assign each a variable
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

checkOut.addEventListener("click", () => {
    // window.location.href = "./checkout.html";
    alert('coming soon')
})

checkOutMobile.addEventListener("click", () => {
    alert('coming soon')
})

var x = 0;

document.querySelectorAll<HTMLElement>(".btn").forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "Added to Cart") {
            return;
        }
        else {
            btn.textContent = "Added to Cart";
            btn.className = "btn btn-success";
            x += 1;

            checkOut.setAttribute("value", `${x}`);
            checkOutMobile.setAttribute("value", `${x}`);
        }
    })
})

