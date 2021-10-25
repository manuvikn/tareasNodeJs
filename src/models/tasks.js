const Task = require("./task");
const fs = require('fs');

const dirbase = `${__dirname + '/../db/database.json'}`;

class Tasks {

    tasks = {};

    constructor() {
        this.loadTasks();
    }

    newTask(desc) {

        const task = new Task(desc);
        this.tasks[task.id] = task;

    }

    get tasksArr() {

        const tasks = [];
        Object.keys(this.tasks).forEach(key => tasks.push(this.tasks[key]));
        return tasks;

    }

    loadTasks() {

        if (fs.existsSync(dirbase)) {
            const data = fs.readFileSync(dirbase, {encoding: 'utf-8'});
            JSON.parse(data).forEach(item => {
                this.tasks[item['id']] = item;
            });
        }

    }

    saveTasks() {
    
        fs.writeFileSync(dirbase, JSON.stringify(this.tasksArr));

    }

}

module.exports = Tasks;