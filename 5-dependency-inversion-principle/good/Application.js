const mysql = require('mysql2');
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
        /* const userRepository = new UserRepository(new FileDbManager(new UserSerializer(user)));
        userRepository.getManager().logStat(); */
        const mysqldb = mysql.createConnection("mysql://root:root@localhost/users_ocp")


        const userRepository = new UserRepository(new MysqlDbManager(mysqldb));
        userRepository.getManager().dumpJson()


        console.log('HALT...');

    }
}