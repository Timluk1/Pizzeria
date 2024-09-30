import mongoose from "mongoose";
import ProductModel from "../models/product-model.js";  // Предполагаем, что модель импортируется правильно

const PATH = "http://YOUR_IP/api/";

export const products = [  
    {
        name: "Чизбургер-пицца", 
        imgPath: `${PATH}images/first.png`,
        basePrice: 300,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 }, 
        ],
    },
    {
        name: "Сырная",
        imgPath: `${PATH}images/second.png`,
        basePrice: 320,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Креветки по-азиатски",
        imgPath: `${PATH}images/third.png`,
        basePrice: 350,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Сырный цыплёнок",
        imgPath: `${PATH}images/fourth.png`,
        basePrice: 360,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Чедбургер-пицца",
        imgPath: `${PATH}images/first.png`,
        basePrice: 395,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Гавайская",
        imgPath: `${PATH}images/second.png`,
        basePrice: 400,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Пепперони Фреш",
        imgPath: `${PATH}images/third.png`,
        basePrice: 430,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Барбекю",
        imgPath: `${PATH}images/fourth.png`,
        basePrice: 450,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Цезарь",
        imgPath: `${PATH}images/first.png`,
        basePrice: 470,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
    {
        name: "Крэйзи Пепперони",
        imgPath: `${PATH}images/second.png`,
        basePrice: 480,
        doughTypes: [
            { type: "Тонкое", factor: 1 },
            { type: "Традиционное", factor: 1.57 },
        ],
        sizeTypes: [
            { size: 26, factor: 1 },
            { size: 30, factor: 1.4 },
            { size: 40, factor: 1.9 },
        ],
    },
];


// Функция для сохранения продуктов
export async function main2() {
    // Подключение к MongoDB
    for (let element of products) {
        // Создаем новый экземпляр продукта
        const product = new ProductModel(element);
        
        // Сохраняем продукт в базе данных
        await product.save();
        console.log(`Product ${element.name} saved successfully!`);
    }
}
