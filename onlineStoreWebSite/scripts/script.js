import userDetails from "./userDetails.js";
import { toyTypes, toys } from "./toys.js";
import Toy from "./Toy.js";

function putValue(key) {
    let eles = document.getElementsByClassName(key);
    for (let x = 0; x < eles.length; x++) {
        eles[x].innerHTML = userDetails[key];
    }
}
for (let key in userDetails) {
    putValue(key);
}
let searchItemList = document.getElementById("searchItemList");
for (let key in toyTypes) {
    let option = document.createElement("option");
    option.value = key;
    option.innerText = toyTypes[key];
    searchItemList.append(option);
}

let newItems = [];
for (let itemNo = 0; itemNo < toys.length; itemNo++) {
    if(toys[itemNo].category == "new") {
        newItems.push(toys[itemNo]);
    }
}
let noOfItemsNewArrivals = newItems.length;
if (noOfItemsNewArrivals > 4) noOfItemsNewArrivals = 4;

let newArrivals = document.getElementById("newArrivals");
for (let itemNo = 0; itemNo < noOfItemsNewArrivals; itemNo++) {
    let item = newItems[itemNo];
    let toy = new Toy(
        item.name,
        item.type,
        item.category,
        item.imageFilename,
        item.rate,
        item.discount,
        item.description,
        true
    );
    newArrivals.append(toy.card());
}
let clearanceContainer = document.getElementById("clearanceContainer");
let oldItems = [];

for (let itemNo = 0; itemNo < toys.length; itemNo++) {
    if(toys[itemNo].category == "old") {
        oldItems.push(toys[itemNo]);
    }
}
let noOfItemsClearanceContainer = oldItems.length;
if (noOfItemsClearanceContainer > 4) noOfItemsClearanceContainer = 4;

for (let itemNo = 0; itemNo < noOfItemsClearanceContainer; itemNo++) {
    let item = oldItems[itemNo];
    let toy = new Toy(
        item.name,
        item.type,
        item.category,
        item.imageFilename,
        item.rate,
        item.discount,
        item.description,
        false
    );
    clearanceContainer.append(toy.card());
}