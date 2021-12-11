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
    /**
     * For FileDbManager we don't want to dump the content of the log file, but we want only to see log file stats
     * There's not need to extend/implement dumpJson() Method
     */
    logStat() {
        console.log(fs.statSync('./db.txt'));
    }


}