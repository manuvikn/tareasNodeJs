const inquirer = require('inquirer');
const colors = require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción  ');
    console.log('=========================\n'.green);

    const {opt} = await inquirer.prompt(menuOpts);

    return opt;

}

const pause = async () => {

    await inquirer.prompt({
        type: 'input',
        message: `Presione ${'ENTER'.green} para continuar`,
        name: 'opt'
    });

};

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

const listDeleteTasks = async (tasks) => {

    const choices = tasks.map((task, index) => {
        return {
            value: task['id'],
            name: `${(index + '.').green} ${task['desc']}`
        }
    });

    choices.unshift({
        value: null,
        name: 'Cancelar'.red
    })

    const menu = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const {id} = await inquirer.prompt(menu);
    return id;

};

const listSelectTasks = async (tasks) => {

    const choices = tasks.map((task, index) => {
        return {
            value: task['id'],
            name: `${(index + '.').green} ${task['desc']}`,
            checked: task['dateComplete'] ? true : false
        }
    });

    const menu = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(menu);
    return ids;

};

const confirmDelete = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
};

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listDeleteTasks,
    confirmDelete,
    listSelectTasks
};