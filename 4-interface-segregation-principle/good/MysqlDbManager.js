const mysql = require('mysql2');
const AbstractDbManagerWithDumpableBehavior = require('./AbstractDbManagerWithDumpableBehavior');

module.exports = class MysqlDbManager extends AbstractDbManagerWithDumpableBehavior {
    constructor() {
        super();
        /**
         * Very Bad Practice Do Not Do it, it's just for the main purpose demo or maybe I'm too lazy :( 
         */
        this.mysql = mysql.createConnection("mysql://root:root@localhost/users_ocp")
    }
    /**
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
    /**
     * For MysqlDbManager We don't need dumpLogStat(), we only need to dump data in the db
     * There's not need to extend/implement dumpLogStat() Method
     */
    dumpJson() {
        this.mysql.query("SELECT * FROM users", (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            this.mysql.end();

        })
    }

}