"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users/users");
const services_1 = require("../services/services");
class Router {
    constructor() {
        this.getAllWebsites = (req, res) => {
            users_1.users.getUsers().then(users => {
                res.json({ web_sites: services_1.services.filterWebSites(users) });
            }).catch(error => console.error(error));
        };
        this.getUsersInOrder = (req, res) => {
            users_1.users.getUsers().then(users => {
                res.json({ users: services_1.services.filterUsersInOrder(users) });
            }).catch(error => console.error(error));
        };
        this.getUsersSuite = (req, res) => {
            users_1.users.getUsers().then(users => {
                res.json({ users: services_1.services.filterSuiteAddress(users) });
            }).catch(error => console.error(error));
        };
    }
    applyRoutes(application) {
        application.get('/listAllWebSites', this.getAllWebsites);
        application.get('/listUsersInOrder', this.getUsersInOrder);
        application.get('/listUsersSuite', this.getUsersSuite);
    }
}
exports.router = new Router();
