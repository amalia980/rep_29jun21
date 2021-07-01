class FoodShop {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
}

const myShop = new FoodShop();

myShop.addProduct({name: "apple"});
myShop.addProduct({name: "pasta"});
myShop.addProduct(5);

console.log(myShop);