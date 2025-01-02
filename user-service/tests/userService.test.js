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
const sequelize_1 = require("sequelize");
const UserService_1 = require("../src/UserService");
let sequelize;
let userService;
beforeAll(() => {
    sequelize = new sequelize_1.Sequelize('sqlite::memory:');
    userService = new UserService_1.UserService(sequelize);
});
test('Should create a user and update points', () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getUserById(1);
    expect(user).toBeNull();
    yield userService.updateUserPoints(1, 100);
    const updatedUser = yield userService.getUserById(1);
    expect(updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.points).toBe(100);
}));
