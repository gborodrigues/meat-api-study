"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("../router/router");
const environment_1 = require("../common/environment");
const elasticsearch_service_1 = require("../services/elasticsearch.service");
class Server {
    initConfig() {
        return new Promise((resolve, reject) => {
            try {
                this.application = express();
                router_1.router.applyRoutes(this.application);
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap() {
        return elasticsearch_service_1.elasticSearch.createClient().then(client => {
            // client.indices.create({
            //   index: 'teste'
            // },(err, resp, status) => {
            //   if(err) {
            //     console.log(err);
            //   }
            //   else {
            //     console.log(status)
            //     console.log("create",resp);
            //   }
            // })
            return this.initConfig().then(() => this);
        });
    }
}
exports.Server = Server;
