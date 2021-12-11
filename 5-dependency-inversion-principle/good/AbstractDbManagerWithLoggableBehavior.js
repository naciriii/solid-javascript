const AbstractDbManager = require("./AbstractDbManager");

module.exports = class AbstractDbManagerWithLoggableBehavior extends AbstractDbManager {

    logStat() {
        throw new Error('Please Implement me !');

    }

}