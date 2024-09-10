// router express
import { Router } from "express";

// Controllers
import UserController from "../controllers/user-controller.js";
import productsController from "../controllers/products-controller.js";

// Validation and middlewares
import { userValidator } from "../validation/auth.js";
import { authenticateToken } from "../middlewares/auth-middleware.js";

export const router = new Router();

// auth routers
router.post("/registration", userValidator, UserController.registration);
router.post("/login", userValidator, UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);
router.get("/access", UserController.isAccessTokenValid);

// products routers
router.get("/products", authenticateToken, productsController.getProducts);
router.get("/cart", authenticateToken, productsController.getCart);
router.post("/cart", authenticateToken, productsController.updateCart);
router.delete("/cart", authenticateToken, productsController.deleteCart);
router.delete("/fullCart", authenticateToken, productsController.deleteFullCart);

