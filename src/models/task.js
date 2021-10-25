const {v4} = require('uuid');

class Task {

    id = '';
    desc = '';
    dateComplete = null;

    constructor(desc) {
        this.id = v4();
        this.desc = desc;
        this.dateComplete = null;
    }

}

module.exports = Task;