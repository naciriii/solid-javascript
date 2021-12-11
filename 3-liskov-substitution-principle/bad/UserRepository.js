const AbstractDbManager = require("./AbstractDbManager");
const FileDbManager = require("./FileDbManager");
const MysqlDbManager = require("./MysqlDbManager");

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
    /**
     * This Will Crash for MysqlDbManager since It violates Liscov sub principle
     * The only option would be a dirty fucking workaround to bypass it
     * @param {User} user 
     */
    store(user) {
        // this.manager.persist(user);

        if (this.manager instanceof FileDbManager) {
            this.manager.persist(user);
        } else if (this.manager instanceof MysqlDbManager) {
            this.manager.insert(user);
        }

    }
}