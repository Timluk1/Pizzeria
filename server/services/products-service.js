import productModel from "../models/product-model.js";
import cartModel from "../models/cart-model.js";

class ProductsService {
    async getProductsFromDb(userId) {
        const cart = await cartModel.findOne({ userId: userId });
        const cartProducts = cart ? cart.products : [];

        const products = await productModel.find();
        const result = products.map((product) => {
            const productId = product._id;
            let quantity = 0;
            // Найти количество в корзине
            for (let cartProduct of cartProducts) {
                if (cartProduct.productId.toString() === productId.toString()) {
                    quantity += cartProduct.quantity;
                }
            }

            return {
                quantityInCart: quantity,
                ...product._doc,  // Используем ._doc для избежания метаданных Mongoose
            };
        });

        return result;
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

        const isDoughValid = product.doughTypes.some(
            (dough) => dough.type === doughType
        );
        const isSizeValid = product.sizeTypes.some(
            (size) => size.size === sizeType
        );

        if (!isDoughValid || !isSizeValid) {
            throw new Error("Invalid dough type or size type");
        }

        return product;
    }

    async addToCartDb(userId, productId, doughType, sizeType, quantity) {
        const product = await this.validateProductOptions(productId, doughType, sizeType);
        const selectedDough = product.doughTypes.find((dough) => dough.type === doughType);
        const selectedSize = product.sizeTypes.find((size) => size.size === sizeType);
    
        const price = Math.round(product.basePrice * (selectedDough?.factor || 1) * (selectedSize?.factor || 1));
    
        if (quantity <= 0) {
            throw new Error("Invalid quantity");
        }
    
        let cart = await this.getCartFromDb(userId);
    
        const productIndex = cart.products.findIndex(
            (item) =>
                item.productId.toString() === productId &&
                item.doughType === doughType &&
                item.sizeType === sizeType
        );
    
        if (productIndex !== -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, imgPath: product.imgPath, price, doughType, sizeType, quantity, name: product.name });
        }
    
        await cart.save();
        return cart;
    }

    async removeFromCartDb(userId, productId, doughType, sizeType, quantity) {
        const product = await this.validateProductOptions(
            productId,
            doughType,
            sizeType
        );

        let cart = await this.getCartFromDb(userId);

        const productIndex = cart.products.findIndex(
            (item) =>
                item.productId.toString() === productId &&
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

    async removeAllFromCartDb(userId) {
        let cart = await this.getCartFromDb(userId);
        cart.products = [];
        return await cart.save();
    }
}

export default new ProductsService();
