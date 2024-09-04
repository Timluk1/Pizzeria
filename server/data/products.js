import mongoose from "mongoose";
import ProductModel from "../models/product-model.js";  // Предполагаем, что модель импортируется правильно

export const products = [
    {
      name: "Чизбургер-пицца",
      imgPath: "http://localhost:4000/images/first.png",
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
      imgPath: "http://localhost:4000/images/second.png",
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
      imgPath: "http://localhost:4000/images/third.png",
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
      imgPath: "http://localhost:4000/images/fourth.png",
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
      imgPath: "http://localhost:4000/images/fifth.png",
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
      imgPath: "http://localhost:4000/images/six.png",
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
      imgPath: "http://localhost:4000/images/seven.png",
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
      imgPath: "http://localhost:4000/images/eight.png",
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
      imgPath: "http://localhost:4000/images/nine.png",
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
      imgPath: "http://localhost:4000/images/ten.png",
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
    {
      name: "Деревенская",
      imgPath: "http://localhost:4000/images/eleven.png",
      basePrice: 460,
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
      name: "Маргарита",
      imgPath: "http://localhost:4000/images/twelve.png",
      basePrice: 410,
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
      name: "Мексиканская",
      imgPath: "http://localhost:4000/images/thirteen.png",
      basePrice: 490,
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
      name: "Четыре сезона",
      imgPath: "http://localhost:4000/images/fourteen.png",
      basePrice: 520,
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
      name: "Четыре сыра",
      imgPath: "http://localhost:4000/images/fifteen.png",
      basePrice: 530,
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
      name: "Суприм",
      imgPath: "http://localhost:4000/images/sixteen.png",
      basePrice: 540,
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
      name: "Овощная",
      imgPath: "http://localhost:4000/images/seventeen.png",
      basePrice: 500,
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
      name: "Дьябло",
      imgPath: "http://localhost:4000/images/eighteen.png",
      basePrice: 570,
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
      name: "Карбонара",
      imgPath: "http://localhost:4000/images/nineteen.png",
      basePrice: 580,
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
      name: "Охотничья",
      imgPath: "http://localhost:4000/images/twenty.png",
      basePrice: 590,
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
