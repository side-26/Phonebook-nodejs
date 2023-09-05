require('./src/js/addNewFile');
require('./src/js/createFile');
require('./src/js/addNewContact');
// require('./src/js/yargs.config');
const yargs = require('yargs');
yargs.command({
    command: 'create',
    describe: '[create new contact]',
    'builder': {
        fullName: {
            'command': 'fullname',
            'describe': '[contact fullname]',
            'alias': 'f',
            demandOption: true,
            type: 'string'
        },
        'email': {

        },
        'fullName': {

        },
    }
})
console.log(yargs.argv)