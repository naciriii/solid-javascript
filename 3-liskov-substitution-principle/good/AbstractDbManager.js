module.exports = class AbstractDbManager {
    constructor() {
        if (this.constructor === AbstractDbManager) {
            throw new Error("Don't Fucking Instanciate Me !");
        }

    }
    persist(user) {
        throw new Error('Please Implement me !');

    }
}