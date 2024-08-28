import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import Stock from "../models/Stock.js";

// получить все продукты
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().select('-__v -createdAt -updatedAt');
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ошибка в получении товаров" });
    }
};

// получить все товары из корзины (только ID продуктов)
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.find().select('productId');
        const productIds = cart.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в получении товаров" });
    }
};


// добавить товар в корзину
export const postCart = async (req, res) => {
    try {
        const { id } = req.params;

        // Проверяем, есть ли уже товар с данным id в корзине
        const existingItem = await Cart.findOne({ productId: id });

        if (existingItem) {
            // Если товар уже есть в корзине, возвращаем сообщение о дубликате
            return res.status(400).json({ message: "Этот товар уже есть в корзине" });
        }

        // Если товара нет в корзине, добавляем новый
        const doc = new Cart({ productId: id });
        await doc.save();

        // Возвращаем обновленный список ID продуктов
        const updatedCart = await Cart.find().select('productId');
        const productIds = updatedCart.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в добавлении товара в корзину" });
    }
};

// удалить товар из корзины
export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        await Cart.deleteOne({ productId: id });

        // Возвращаем обновленный список ID продуктов
        const updatedCart = await Cart.find().select('productId');
        const productIds = updatedCart.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в удалении товара из корзины" });
    }
};

// получить все товары из избранных (только ID продуктов)
export const getStock = async (req, res) => {
    try {
        const stock = await Stock.find().select('productId');
        const productIds = stock.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в получении товаров" });
    }
};

// добавить товар в избранные
export const postStock = async (req, res) => {
    try {
        const { id } = req.params;

        // Проверяем, есть ли уже товар с данным id в избранном
        const existingItem = await Stock.findOne({ productId: id });

        if (existingItem) {
            // Если товар уже есть в избранном, возвращаем сообщение о дубликате
            return res.status(400).json({ message: "Этот товар уже в избранном" });
        }

        // Если товара нет в избранном, добавляем новый
        const doc = new Stock({ productId: id });
        await doc.save();

        // Возвращаем обновленный список ID продуктов
        const updatedStock = await Stock.find().select('productId');
        const productIds = updatedStock.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в добавлении товара в избранное" });
    }
};

// удалить товар из избранных
export const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;
        await Stock.deleteOne({ productId: id });

        // Возвращаем обновленный список ID продуктов
        const updatedStock = await Stock.find().select('productId');
        const productIds = updatedStock.map(item => item.productId);
        res.status(200).json(productIds);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ошибка в удалении товара из избранного" });
    }
};

// Эндпоинт для получения суммы корзины
export const getSumCart = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        
        if (!cartItems.length) {
            return res.status(200).json({ total: 0 });
        }

        let total = 0;
        
        for (const item of cartItems) {
            const product = await Product.findById(item.productId);
            if (product) {
                total += product.price ;
            }
        }

        res.status(200).json({ total });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
};