
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
     * Violates the OCP principle , in case we want to change the database we have to change code here
     * This class and exactly this method is open for modification
     * @param {User} user 
     */
    store(user) {
        this.manager.appendFileSync('./db.txt', this.userSerializer.serialize(user) + "\n");

    }
}