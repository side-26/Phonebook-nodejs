const yargs = require('yargs');
yargs.command({
    command: 'create',
    describe: '[create new contact]',
    builder: {
        fullname: {
            command: 'fullname',
            describe: '[contact fullname]',
            demandOption: true,
            'alias': 'f',
            type: 'string'
        },
        'email': {
            command: 'email',
            describe: '[contact email]',
            demandOption: true,
            'alias': 'e',
            type: 'string'
        },
        'phone': {
            command: 'phone',
            describe: '[contact phone]',
            demandOption: true,
            'alias': 'p',
            type: 'string'
        },
    },
    handler:(args)=>{
            console.log(args)
    }
})
yargs.parse()