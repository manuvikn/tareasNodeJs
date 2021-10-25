const colors = require('colors');
const {inquirerMenu, pause} = require('./js/inquirer');
// const {mostrarMenu} = require('./js/messages');

async function main() {
    console.clear();
    
    let opt = '';

    while(opt !== '0') {
        opt = await inquirerMenu();

        await pause();
    }
 
}


main();