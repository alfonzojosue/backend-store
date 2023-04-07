"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
const Products_1 = require("../Models/Products");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Products_1.Product.find();
    return res.json(product);
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, img, size, characteristic, category, stock } = req.body;
    if (!name || !price || !img || !characteristic || !category || !stock) {
        res.status(404).send("Data Found");
    }
    try {
        const product = new Products_1.Product();
        product.name = name;
        product.price = price;
        product.img = img;
        product.size = size;
        product.characteristic = characteristic;
        product.category = category;
        product.stock = stock;
        yield product.save();
        return res.json(product);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createProduct = createProduct;
