const AbstractDbManager = require("./AbstractDbManager");

module.exports = class AbstractDbManagerWithDumpableBehavior extends AbstractDbManager {

    dumpJson() {
        throw new Error('Please Implement me !');

    }

}