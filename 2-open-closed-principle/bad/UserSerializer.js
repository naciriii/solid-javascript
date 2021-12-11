
module.exports = class UserSerializer {
    constructor(user) {
        this.user = user;
    }
    serialize() {
        return `Name: ${this.user.name}`;
    }
}