const colors = require('colors');
const {inquirerMenu, pause, readInput, listDeleteTasks, confirmDelete, listSelectTasks} = require('./js/inquirer');
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
                tasks.listTasks();
                break;
            case '3':
                tasks.listTasksByQuery(true);
                break;
            case '4':
                tasks.listTasksByQuery(false);
                break;
            case '5':
                const ids = await listSelectTasks(tasks.tasksArr);
                tasks.completeTasks(ids);
                break;              
            case '6':
                const id = await listDeleteTasks(tasks.tasksArr);
                if ( id && await confirmDelete('¿Está seguro?')) tasks.deleteTask(id);
                break;               
            default:
                break;
        }

        tasks.saveTasks();

        await pause();

    }
 
}


main();