export default class Toy {
    constructor(toyName, toyType, category, filename, rate, discount, description, dropShadow ) {
        this.toyName = toyName;
        this.toyType = toyType;
        this.category = category;
        this.filename = filename;
        this.rate = rate;
        this.discount = discount;
        this.description = description;
        this.dropShadow = dropShadow;
        this.price = Math.floor(this.rate - this.rate * this.discount * 0.01);
    }
    card() {
        let cardEle = document.createElement("div");
        cardEle.classList.add("item");
        if (this.category == "new") {
            cardEle.classList.add("newItem");
        }
        if (this.dropShadow == true) {
            cardEle.classList.add("itemShadow");
        }

        let cardImg = document.createElement("img");
        cardImg.src = "/images/" + this.filename;
        cardImg.alt = this.toyName;
        cardImg.classList.add("itemImg");
        cardEle.append(cardImg);

        let cardTitle = document.createElement("h2");
        cardTitle.innerText = this.toyName;
        cardTitle.classList.add("itemName");
        cardEle.append(cardTitle);

        let rateContainer = document.createElement("div");
        rateContainer.classList.add("horFlex", "lightText");

        let itemRate = document.createElement("p");
        itemRate.classList.add("itemRate");
        itemRate.innerText = "₹" + this.price;
        rateContainer.append(itemRate);

        let itemDiscount = document.createElement("p");
        itemDiscount.classList.add("itemDiscount");
        itemDiscount.innerHTML = "<s>₹" + this.price + "</s> (" + this.discount + "% డిస్కౌంట్)";
        rateContainer.append(itemDiscount);

        let itemDescription = document.createElement("p");
        itemDescription.classList.add("itemDiscription", "lightText");
        cardEle.append(itemDescription);

        cardEle.append(rateContainer);

        return cardEle;
    }
}