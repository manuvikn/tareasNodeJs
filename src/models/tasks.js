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

    deleteTask(id) {
        if (this.tasks[id]) {
            delete this.tasks[id];
        }
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

    completeTasks(ids) {

        this.tasksArr.forEach( (item) => {
            let index = ids.indexOf(item.id);
            if (index !== -1) {
                if (!this.tasks[item.id].dateComplete) {
                    this.tasks[item.id].dateComplete = new Date().toISOString();
                }
                ids.splice(index, 1);
            } else {
                this.tasks[item.id].dateComplete = null;
            }
        });

    }

    saveTasks() {
    
        fs.writeFileSync(dirbase, JSON.stringify(this.tasksArr));

    }

    listTasks() {

        this.tasksArr.forEach( (item, index) => {
            let i = `${index + 1}`.green;
            console.log(`${ i } ${item['desc']} :: ${ item['dateComplete'] ? 'Completada'.green : 'Pendiente'.red }`);
        } );

    }

    listTasksByQuery( complete ) {

        const listTasks = this.tasksArr.filter(item => Boolean(item['dateComplete']) === complete);
        listTasks.forEach( (item, index) => {
            let i = `${index + 1}`.green;
            console.log(`${ i } ${item['desc']} :: ${ item['dateComplete'] ? item['dateComplete'].green : 'Pendiente'.red }`);
        } );

    }

}

module.exports = Tasks;