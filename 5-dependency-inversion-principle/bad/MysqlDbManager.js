const mysql = require('mysql2');
const AbstractDbManagerWithDumpableBehavior = require('./AbstractDbManagerWithDumpableBehavior');

module.exports = class MysqlDbManager extends AbstractDbManagerWithDumpableBehavior {
    constructor() {
        super();
        /**
         * Here We come , this Breaks Dependency Inversion principle ! untestability is a big issue
         * Very Bad Practice Do Not Do it, it's just for the main purpose demo or maybe I'm too lazy :( 
         */
        this.mysql = mysql.createConnection("mysql://root:root@localhost/users_ocp")
    }
    /**
     * @param {*} user 
     */
    persist(user, cb) {
        this.mysql.execute("INSERT INTO users (name) VALUES(?)", [user.name], (err, res) => {
            if (err) {
                throw err;
            }

            if (cb) cb(res);
            this.mysql.end()

        });

    }
    /**
     * For MysqlDbManager We don't need dumpLogStat(), we only need to dump data in the db
     * There's not need to extend/implement dumpLogStat() Method
     */
    dumpJson(cb = null) {
        this.mysql.query("SELECT * FROM users", (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            if (cb) cb(result)
            this.mysql.end();

        })
    }

}