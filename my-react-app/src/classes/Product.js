class Product {
    constructor(id, name, salePrice, costPrice, discountPercentage = 0) {
        this.id = id;
        this.name = name;
        this.salePrice = salePrice;
        this.costPrice = costPrice;
        this.discountPercentage = discountPercentage;
    }

    calculateDiscountedPrice() {
        return this.salePrice * (1 - this.discountPercentage / 100);
    }

    calculateProfit() {
        return this.calculateDiscountedPrice() - this.costPrice;
    }
}

export default Product;
