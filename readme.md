[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p align="center">
    <img src="./github images/MERN.png" alt="mongo" height="100" />
</p>

# Приложение для пиццерии с использованием MERN стека.

# Клонирование репозитория
``` 
git clone https://github.com/Timluk1/Pizzeria.git
```


## Как работает приложение

<p align="center">
  <video controls>
    <source src="./github images/work.mp4" type="video/mp4">
    Ваш браузер не поддерживает встроенные видео.
  </video>
</p>


# 🌐 Фронтенд

## Технологии
- **React**
- **Typescript**
- **Redux Toolkit**
- **React Router DOM**

## Настройка

Необходимо создать `.env` в папке `client` и указать:
```
VITE_API_PATH=http://localhost/api
```

# 💻 Бекенд

## Технологии
- **Express**
- **Mongodb**
- **Json web token**
## Краткая информация
На бекенде реализована авторизация через refresh и access токены. Refresh токен хранится в cookie. База данных используется mongodb, всего 4 файла с данными:
<p align="center">
    <img src="./github images/MONGODB.png" alt="mongo" height="100" />
</p>

- **carts - для каждого пользователя хранится массив товаров**
- **products - хранятся товары с ссылками на их изображения**
- **tokens - хранятся refresh токены для каждого пользователя**
- **users - хранятся пользователя и их пароли (шифруются с помощью bcrypt)**

## Настройка

Необходимо создать `.env` в папке `server` и указать:
```
PORT=4000
MONGO_PATH="ССЫЛКА НА БАЗУ ДАННЫХ"
JWT_ACCESS_SECRET="ПРИДУМАЙТЕ ЛЮБУЮ КОМБИНАЦИЮ"
JWT_REFRESH_SECRET="ПРИДУМАЙТЕ ЛЮБУЮ КОМБИНАЦИЮ"
PATH_API=http://localhost/api/
CLIENT_URL=http://localhost
```
- **PORT - порт, на котором запускается бекенд**
- **MONGO_PATH - ссылка на базу данных**
- **JWT_ACCESS_SECRET - секретный ключ, чтобы нельзя было подделать токен**
- **PATH_API - секретный ключ, чтобы нельзя было подделать токен**
- **CLIENT_URL - путь к фронтенду**
  
Ссылку на базу данных можно получить, создав cluster на сайте: 
https://www.mongodb.com/resources/products/fundamentals/clusters

# 🛠 Запуск проекта
Также необходимо установить docker по ссылке:
https://www.docker.com/
После введите команду:
```
docker compose up --build
```
Теперь проект запущен
- **фронтенд: - http://localhost/**
- **бекенд - http://localhost/api**
