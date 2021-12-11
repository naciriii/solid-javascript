const mysql = require('mysql2');
const sinon = require('sinon');
const assert = require('chai').assert

describe('MysqlDbManager Test suite', () => {

    describe('The Good Way', () => {
        /**
         * We can mock the database connection since it's seperated from MysqlDbManager Class
         *  and mysqlconnection dependency is not hidden
         */
        before(() => {

            this.con = mysql.createConnection("mysql://root:root@localhost/users_ocp")
            this.mysql = sinon.mock(this.con);
            this.mysqlDbManager = new (require("../good/MysqlDbManager"))(this.con);

        })

        it('Should Instanciate Correctly', () => {
            assert(this.mysqlDbManager !== undefined);

        })

        it('Should run dumpJson() method correctly with no errors', (done) => {
            this.mysql.expects('query').once().withArgs("SELECT * FROM users");
            this.mysqlDbManager.dumpJson();

            this.mysql.verify();
            this.mysql.restore();
            done();
        })

        it('Should Persist user to mysql database', () => {
            this.mysql.expects("execute").withArgs('INSERT INTO users (name) VALUES(?)', ['Naciri']);
            this.mysqlDbManager.persist({ name: "Naciri" });
            this.mysql.verify();
            this.mysql.restore();
        })

        after(() => {
            this.con.end();
        })
    })
    describe('The Bad Way', () => {
        /**
         * We cannot mock the database connection since it's tightly coupled to the MysqlDbManager
         * and the mysqlConnection dependency is hidden
         */
        before(() => {
            this.mysqlDbManager = new (require("../bad/MysqlDbManager"))();

        })
        it('Should Instanciate Correctly', () => {
            assert(this.mysqlDbManager !== undefined);

        })
        it('Should run dumpJson() method correctly with no errors', (done) => {
            /**
             * It's almost impossible to mock mysql dependency making MysqlDbManager untestable
             */
            this.mysqlDbManager.dumpJson((res) => {
                assert.isArray(res);
                done();

            })
        })
        it('Should Persist user to mysql database', (done) => {
            /**
             * Connection Was closed We have to reconnect
             */
            this.mysqlDbManager = new (require("../bad/MysqlDbManager"))();
            this.mysqlDbManager.persist({ name: "Naciri" }, (res) => {
                done();
            });


        })

    })


})