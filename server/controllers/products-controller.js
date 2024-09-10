import productsService from "../services/products-service.js";

class ProductsController {
    async getProducts(req, res, next) {
        try {
            const userId = req.user.id;
            const products = await productsService.getProductsFromDb(userId);
            const response = products.map(({_id, ...other}) => {
                return {productId: _id, ...other}
            });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    async getCart(req, res, next) {
        try {
            const userId = req.user.id;
            const { products, imgPath, name} = await productsService.getCartFromDb(userId);
            const response = {
                userId,
                products,
                imgPath,
                name
            }
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    async updateCart(req, res, next) {
        try {
            const userId = req.user.id;
            const { productId, doughType, sizeType, quantity } = req.body;
            // Добавление товара в корзину
            const cart = await productsService.addToCartDb(userId, productId, doughType, sizeType, quantity );
            const {products, imgPath, name} = cart;
            const response = {
                userId,
                products,
                imgPath,
                name
            }
            res.status(200).json(response);
        } catch (error) {
            if (error.message === "Invalid dough type or size type") {
                res.status(400).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    async getCartProductsId(req, res, next) {
        try {
            const userId = req.user.id;
        } catch (error) {
            next(error)
        }
    }

    async deleteCart(req, res, next) {
        try {
            const userId = req.user.id;
            const { productId, doughType, sizeType, quantity } = req.body;
            // Удаление товара из корзины
            const cart = await productsService.removeFromCartDb(userId, productId, doughType, sizeType, quantity);
            res.status(200).json(cart);
        } catch (error) {
            if (error.message === "Invalid dough type or size type") {
                res.status(400).json({ message: error.message });
            } else {
                next(error);
            }
        }
    }

    async deleteFullCart(req, res, next) {
        try {
            const userId = req.user.id;
            const cart = await productsService.removeAllFromCartDb(userId);
            res.status(200).json(cart);
        } catch (error) {
            next(error)
        }
    }
}

export default new ProductsController();
