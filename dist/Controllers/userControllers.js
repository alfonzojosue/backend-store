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
exports.getUsersById = exports.getUsers = void 0;
const User_1 = require("../Models/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.User.find();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getUsersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield User_1.User.find({
        where: {
            id: id
        }
    });
    return res.status(200).json(user);
});
exports.getUsersById = getUsersById;
