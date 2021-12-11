const fs = require('fs');

module.exports = class FileDbManager {
    constructor(userSerializer) {
        this.userSerializer = userSerializer;
    }

    persist(user) {
        fs.appendFileSync('./db.txt', this.userSerializer.serialize(user) + "\n");

    }

}