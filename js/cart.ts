let myCartfromJSONa = localStorage.getItem("cartJSON");
let myItemsa = JSON.parse(myCartfromJSONa);
let checkoutPage = document.querySelector("#checkoutPage");


const hatDetailsa = [
    {
        name: "hat1",
        price: "100",
        img: "/hat1.jpg",
        description: "hat1 description",
    },
    {
        name: "hat2",
        price: "200",
        img: "/hat2.jpg",
        description: "hat2 description"
    },
    {
        name: "hat3",
        price: "300",
        img: "/hat3.jpg",
        description: "hat3 description"
    },
    {
        name: "hat4",
        price: "400",
        img: "/hat4.jpg",
        description: "hat4 description"
    },

    {
        name: "hat5",
        price: "500",
        img: "/hat5.jpg",
        description: "hat5 description"
    },
    {
        name: "hat6",
        price: "600",
        img: "/hat6.jpg",
        description: "hat6 description"
    },
    {
        name: "hat7",
        price: "700",
        img: "/hat7.jpg",
        description: "hat7 description"
    },
    {
        name: "hat8",
        price: "800",
        img: "/hat8.jpg",
        description: "hat8 description"
    },
    {
        name: "hat9",
        price: "900",
        img: "/hat9.jpg",
        description: "hat9 description"
    },
    {
        name: "hat10",
        price: "1000",
        img: "/hat10.jpg",
        description: "hat10 description"
    },
    {
        name: "hat11",
        price: "1100",
        img: "/hat11.jpg",
        description: "hat11 description"
    },
    {
        name: "hat12",
        price: "1200",
        img: "/hat12.jpg",
        description: "hat12 description"
    },
    {
        name: "hat13",
        price: "1300",
        img: "/hat13.jpg",
        description: "hat13 description"
    }
]

const reset = document.createElement("button");

reset.textContent = "Reset";

reset.addEventListener("click", () => {
    // make cartJSON empty array
    let cartJSON = [];
    // set cartJSON to localStorage
    localStorage.setItem("cartJSON", JSON.stringify(cartJSON));
    // reload page
    location.reload();

});

checkoutPage.append(reset);


// make myitemsa into an array
let myItemsArray = [];
for (let i = 0; i < myItemsa.length; i++) {
    myItemsArray.push(myItemsa[i]);
}

// for each item in myItemsArray, find the matching object with name in hatDetailsa
const myItemsArrayWithDetails = [];
for (let i = 0; i < myItemsArray.length; i++) {
    for (let j = 0; j < hatDetailsa.length; j++) {

        if (myItemsArray[i] === hatDetailsa[j].name) {
            myItemsArrayWithDetails.push(hatDetailsa[j]);
        }
    }
}

//get data from myitemsarraywithdetails and build checkout page
let total = 0

for (let i = 0; i < myItemsArrayWithDetails.length; i++) {


    let checkoutPageItem = document.createElement("article");
    checkoutPageItem.className = 'checkout-div'
    checkoutPage.append(checkoutPageItem);


    let checkoutPageItemImg = document.createElement("img");

    let checkoutPageItemCointainer = document.createElement("div")

    let checkoutPageItemName = document.createElement('h3');

    let checkoutPageItemPrice = document.createElement('p')

    checkoutPageItemImg.src = `./images/gallery/${myItemsArrayWithDetails[i].img}`;
    checkoutPageItemName.textContent = `Product: ${myItemsArrayWithDetails[i].name}`
    checkoutPageItemPrice.textContent = `Price: ${myItemsArrayWithDetails[i].price}`

    total += parseFloat(myItemsArrayWithDetails[i].price)

    console.log(total)

    checkoutPageItem.append(checkoutPageItemImg, checkoutPageItemCointainer);

    checkoutPageItemCointainer.append(checkoutPageItemName, checkoutPageItemPrice)


}

// function to add two numbers








