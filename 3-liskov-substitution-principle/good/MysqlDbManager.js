const mysql = require('mysql2');
const AbstractDbManager = require('./AbstractDbManager');

module.exports = class MysqlDbManager extends AbstractDbManager {
    constructor() {
        super();
        /**
         * Very Bad Practice Do Not Do it, it's just for the main purpose demo or maybe I'm too lazy :( 
         */
        this.mysql = mysql.createConnection("mysql://root:root@localhost/users_ocp")
    }
    /**
     * This Implements AbstractDb Manager Correctly
     * @param {*} user 
     */
    persist(user) {
        this.mysql.execute("INSERT INTO users (name) VALUES(?)", [user.name], (err) => {
            if (err) {
                throw err;
            }
            this.mysql.end()
        });

    }

}