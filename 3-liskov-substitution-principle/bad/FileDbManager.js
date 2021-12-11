const fs = require('fs');
const AbstractDbManager = require('./AbstractDbManager');

module.exports = class FileDbManager extends AbstractDbManager {
    constructor(userSerializer) {
        super();
        this.userSerializer = userSerializer;
    }

    persist(user) {
        fs.appendFileSync('./db.txt', this.userSerializer.serialize(user) + "\n");

    }
    dumpText() {
        console.log(fs.readFileSync('./db.txt'));

    }

}