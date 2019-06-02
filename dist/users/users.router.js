"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
class UserRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/user', (req, resp, next) => {
            resp.json({ message: 'users router' });
        });
    }
}
exports.usersRouter = new UserRouter();
