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
exports.UserService = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
class UserService {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.initializeModel();
    }
    initializeModel() {
        User.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
            points: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
        }, { sequelize: this.sequelize, modelName: 'User' });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findByPk(id);
        });
    }
    updateUserPoints(id, points) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserById(id);
            if (user) {
                user.points = points;
                yield user.save();
            }
            return user;
        });
    }
}
exports.UserService = UserService;
