"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    endPointUsers: { url: process.env.URL_USERS || 'http://jsonplaceholder.typicode.com/users' }
};
