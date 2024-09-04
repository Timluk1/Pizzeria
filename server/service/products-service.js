import productModel from "../models/product-model.js";
import cartModel from "../models/cart-model.js";

class ProductsService {
    async getProductsFromDb() {
        const products = await productModel.find();
        return products;
    }

    async getCartFromDb(userId) {
        let cart = await cartModel.findOne({ userId });
        if (!cart) {
            cart = new cartModel({ userId, products: [] });
            await cart.save();
        }
        return cart;
    }

    async validateProductOptions(productId, doughType, sizeType) {
        const product = await productModel.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        const isDoughValid = product.doughTypes.some(dough => dough.type === doughType);
        const isSizeValid = product.sizeTypes.some(size => size.size === sizeType);

        if (!isDoughValid || !isSizeValid) {
            throw new Error("Invalid dough type or size type");
        }

        return product;
    }

    async addToCartDb(userId, productId, doughType, sizeType, quantity) {
        const product = await this.validateProductOptions(productId, doughType, sizeType);

        let cart = await this.getCartFromDb(userId);

        const productIndex = cart.products.findIndex(
            item => item.productId.toString() === productId &&
                    item.doughType === doughType &&
                    item.sizeType === sizeType
        );

        if (productIndex !== -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, doughType, sizeType, quantity });
        }

        await cart.save();
        return cart;
    }

    async removeFromCartDb(userId, productId, doughType, sizeType, quantity) {
        const product = await this.validateProductOptions(productId, doughType, sizeType);

        let cart = await this.getCartFromDb(userId);

        const productIndex = cart.products.findIndex(
            item => item.productId.toString() === productId &&
                    item.doughType === doughType &&
                    item.sizeType === sizeType
        );

        if (productIndex !== -1) {
            cart.products[productIndex].quantity -= quantity;

            if (cart.products[productIndex].quantity <= 0) {
                cart.products.splice(productIndex, 1);
            }

            await cart.save();
        }

        return cart;
    }
}

export default new ProductsService();
