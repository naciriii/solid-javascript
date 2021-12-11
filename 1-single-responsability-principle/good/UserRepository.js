/**
 * Has the responsability to manage User's database related operations through the db/file manager
 */
module.exports = class UserRepository {
    /**
     * 
     * @param {UserSerializer} userSerializer 
     * @param {fs} manager 
     */
    constructor(userSerializer, manager) {
        this.manager = manager;
        this.userSerializer = userSerializer;

    }
    /**
     * 
     * @param {User} user 
     */
    store(user) {
        this.manager.appendFileSync('./db.txt', this.userSerializer.serialize(user) + "\n");

    }
}