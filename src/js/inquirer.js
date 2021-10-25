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
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.yellow);
    console.log('  Seleccione una opción  '.yellow);
    console.log('==========================\n'.yellow);

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

module.exports = {
    inquirerMenu,
    pause
};