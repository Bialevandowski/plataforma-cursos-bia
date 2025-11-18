class CartService {
    static instance = null;

    constructor() {
        if (CartService.instance) {
            return CartService.instance;
        }

        this.cart = [];
        CartService.instance = this;
    }

    add(item) {
        this.cart.push(item);
    }

    remove(id) {
        this.cart = this.cart.filter(i => i.id !== id);
    }

    clear() {
        this.cart = [];
    }

    getCart() {
        return this.cart;
    }
}

export default new CartService();
