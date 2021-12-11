/**
 * Has The responsability to serialize User Object to a proper format
 */
module.exports = class UserSerializer {
    constructor(user) {
        this.user = user;
    }
    serialize() {
        return `Name: ${this.user.name}`;
    }
}