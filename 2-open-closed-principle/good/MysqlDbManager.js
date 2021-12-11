const mysql = require('mysql2');
const FileDbManager = require('./FileDbManager');

module.exports = class MysqlDbManager extends FileDbManager {
    constructor(userSerializer) {
        super(userSerializer);
        /**
         * Very Bad Practice Do Not Do it, it's just for the main purpose demo or maybe I'm too lazy :( 
         */
        this.mysql = mysql.createConnection("mysql://root:root@localhost/users_ocp")
    }

    persist(user) {
        this.mysql.execute("INSERT INTO users (name) VALUES(?)", [user.name], (err) => {
            if (err) {
                throw err;
            }
            this.mysql.end()
        });

    }

}