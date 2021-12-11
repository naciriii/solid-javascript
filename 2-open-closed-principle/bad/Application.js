const fs = require('fs');
const User = require('./User');
const UserRepository = require("./UserRepository");
const UserSerializer = require("./UserSerializer");

module.exports = class Application {
    constructor(name) {
        this.name = name;
    }
    boot() {
        console.log(`${this.name} BOOT ...`);
        const user = new User('Nacer');
        const userRepository = new UserRepository(new UserSerializer(user), fs);
        userRepository.store(user);
        console.log('HALT...');

    }
}