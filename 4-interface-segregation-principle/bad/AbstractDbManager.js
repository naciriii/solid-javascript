/**
 * This violates Interface segregation principle
 * We made our AbstractDbManager Here behaves like an Interface (Js doesn't have interfaces by nature)
 * Yet It has many contracts to fulfill even though we don't need them all
 */
module.exports = class AbstractDbManager {
    constructor() {
        if (this.constructor === AbstractDbManager) {
            throw new Error("Don't Fucking Instanciate Me !");
        }

    }
    persist(user) {
        throw new Error('Please Implement me !');

    }

    dumpJson() {
        throw new Error('Please Implement me !');

    }

    logStat() {
        throw new Error('Please Implement me !');

    }
}