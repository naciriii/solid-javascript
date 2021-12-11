const FileDbManager = require('./FileDbManager');
const MysqlDbManager = require('./MysqlDbManager');
const User = require('./User');
const UserRepository = require("./UserRepository");
const UserSerializer = require("./UserSerializer");

/**
 * Behaves like a Facade that has the responsability to bootstrap the application
 */
module.exports = class Application {
    constructor(name) {
        this.name = name;
    }
    boot() {
        console.log(`${this.name} BOOT ...`);
        const user = new User('Nacer');
        //const userRepository = new UserRepository(new FileDbManager(new UserSerializer(user)));
        const userRepository = new UserRepository(new MysqlDbManager(new UserSerializer(user)));


        userRepository.store(user);
        console.log('HALT...');

    }
}