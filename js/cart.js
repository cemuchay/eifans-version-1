var myCartfromJSONa = localStorage.getItem("cartJSON");
var myItemsa = JSON.parse(myCartfromJSONa);
var hatDetailsa = [
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
// for id of objects in myItemsa build checkout page
// make myitemsa into an array
var myItemsArray = [];
for (var i_1 = 0; i_1 < myItemsa.length; i_1++) {
    myItemsArray.push(myItemsa[i_1]);
}
// for each item in myItemsArray, find the matching object with name in hatDetailsa
var myItemsArrayWithDetails = [];
for (var i_2 = 0; i_2 < myItemsArray.length; i_2++) {
    for (var j = 0; j < hatDetailsa.length; j++) {
        console.log(myItemsArray[i_2]);
        if (myItemsArray[i_2] === hatDetailsa[j].name) {
            myItemsArrayWithDetails.push(hatDetailsa[j]);
        }
    }
}
console.log(myItemsArrayWithDetails);
//# sourceMappingURL=cart.js.map