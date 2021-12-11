const fs = require('fs');
/**
 * Violates SRP principle
 * Has Many Responsabilities
 * Modeling a User entity
 * Serialize User
 * Stores User into databases
 */
module.exports = class User {

    constructor(name) {
        this.name = name
    }
    store() {
        console.log('BOOT...')
        /**
         * Add new line to users database in proper format
         */
        fs.appendFileSync('./db.txt', `Name: ${this.name} \n`);
        console.log('HALT...')
    }


}