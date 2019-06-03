"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const environment_1 = require("../common/environment");
class Users {
    getUsers() {
        return new Promise((resolve, reject) => {
            request.get(environment_1.environment.endPointUsers.url, { json: true }, (error, res, body) => {
                if (error)
                    reject(error);
                resolve(body);
            });
        });
    }
}
exports.users = new Users();
