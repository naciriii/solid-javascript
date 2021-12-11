const FileDbManager = require("./FileDbManager");

module.exports = class UserRepository {
    /**
     *  manager here respects OCP Principle 
     * We don't have to change anything in case we change db driver
     * @param {UserSerializer} userSerializer 
     * @param {FileDbManager} manager 
     */
    constructor(manager) {

        if (!(manager instanceof FileDbManager)) {
            throw new Error('Manager Is not Supported');

        }
        this.manager = manager;

    }
    /**
     * This Stands Still and We don't have To change it, Respect OCP Principle
     * @param {User} user 
     */
    store(user) {
        this.manager.persist(user);

    }
}