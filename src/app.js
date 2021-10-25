const colors = require('colors');
const {inquirerMenu, pause, readInput} = require('./js/inquirer');
const Tasks = require('./models/tasks');
// const {mostrarMenu} = require('./js/messages');

async function main() {
    console.clear();
    
    let opt = '';
    const tasks = new Tasks();

    while(opt !== '0') {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.newTask(desc);
                break;
            case '2':
                console.log(tasks.tasksArr);
                console.log(tasks.tasks);
                break;
            default:
                break;
        }

        tasks.saveTasks();

        await pause();

    }
 
}


main();