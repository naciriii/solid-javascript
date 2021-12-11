const AbstractDbManager = require("./AbstractDbManager");

module.exports = class UserRepository {
    /**
     * @param {UserSerializer} userSerializer 
     * @param {AbstractDbManager} manager 
     */
    constructor(manager) {

        if (!(manager instanceof AbstractDbManager)) {
            throw new Error('Manager Is not Supported');

        }
        this.manager = manager;

    }
    getManager() {
        return this.manager;
    }
    /**
     * @param {User} user 
     */
    store(user) {
        /**
         * This Should Not Crash, which mean Both MysqlDbManager and FileDbManager substitute AbstractDbManager
         * Correctly , thus persist method should run ok for both
         */
        this.manager.persist(user);

    }
}