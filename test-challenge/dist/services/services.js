"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Services {
    filterWebSites(users) {
        const webSites = [];
        for (let user of users) {
            if (typeof user.website !== 'undefined')
                webSites.push(user.website);
        }
        return webSites;
    }
    filterUsersInOrder(users) {
        const arrayLength = users.length;
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < (arrayLength - i - 1); j++) {
                // TODO retirar o Mrs
                if (users[j].name > users[j + 1].name) {
                    let temporary = users[j];
                    users[j] = users[j + 1];
                    users[j + 1] = temporary;
                }
            }
        }
        return users;
    }
    filterSuiteAddress(users) {
        const usersFiltered = [];
        for (let user of users) {
            if (typeof user.address.suite !== 'undefined' &&
                user.address.suite.toLowerCase().includes("suite"))
                usersFiltered.push(user);
        }
        return usersFiltered;
    }
}
exports.services = new Services();
