"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch = require("elasticsearch");
class ElasticSearchService {
    createClient() {
        return new Promise((resolve, reject) => {
            try {
                const client = new elasticsearch.Client({
                    host: 'http://localhost:9200'
                });
                resolve(client);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.elasticSearch = new ElasticSearchService();
