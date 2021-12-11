const AbstractDbManagerWithDumpableBehavior = require('./AbstractDbManagerWithDumpableBehavior');

module.exports = class MysqlDbManager extends AbstractDbManagerWithDumpableBehavior {
    constructor(mysql) {
        super();
        /**
         */
        this.mysql = mysql
    }
    /**
     * @param {*} user 
     */
    persist(user, cb = null) {
        this.mysql.execute("INSERT INTO users (name) VALUES(?)", [user.name], (err, res) => {
            if (err) {
                throw err;
            }
            if (cb) cb(res);
            this.mysql.end();
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