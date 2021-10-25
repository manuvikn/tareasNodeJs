const colors = require('colors');

const mostrarMenu = () => {

    console.clear();

    return new Promise((resolve, reject) => {
        console.log('=========================='.yellow);
        console.log('  Seleccione una opción  '.yellow);
        console.log('==========================\n'.yellow);
    
        console.log(`${'1'.yellow}. ${'Crear tarea'.green}`);
        console.log(`${'2'.yellow}. ${'Listar tareas'.green}`);
        console.log(`${'3'.yellow}. ${'Listar tareas compleatadas'.green}`);
        console.log(`${'4'.yellow}. ${'Listar tareas pendientes'.green}`);
        console.log(`${'5'.yellow}. ${'Completar tarea(s)'.green}`);
        console.log(`${'6'.yellow}. ${'Borrar tarea'.green}`);
        console.log(`${'0'.yellow}. ${'Salir'.green}\n`);
    
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question('Selecciona una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        });

    });


};

const pause = () => {

    return new Promise((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
            readLine.close();
            resolve();
        });

    });

};

module.exports = {
    mostrarMenu,
    pause
}