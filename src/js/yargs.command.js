
const { getAllContacts, haveDuplicate, logContacts, writeFile } = require('./utils');
const chalk = require('chalk');
const yargs = require('yargs');
// create command
yargs.command({
    command: 'create',
    describe: '[create new contact]',
    builder: {
        fullName: {
            command: 'fullName',
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
    handler: ({ fullName, email, phone }) => {
        const id = new Date().getTime()
        const newContact = { id, fullName, email, phone }
        try {
            const contacts = getAllContacts()
            if (!haveDuplicate(contacts, fullName)) {
                contacts.push(newContact)
                const strContact = JSON.stringify(contacts)
                writeFile(strContact)
                console.log(chalk.green('contact add suucessfull'))
            }
            else
                console.log(chalk.red('this contact is already exists!!!'))

        } catch (error) {
            console.log(chalk.red('adding is failed!!!'))
        }


    }
})

yargs.command({
    command: 'ls',
    describe: '[show contacts list]',
    // builder: {
    //     command: 't',
    //     describe: '[show all of contacts]',
    //     demandOption: true,
    //     type: 'string'
    // },

    handler: (args) => {
        try {
            data = getAllContacts()
            logContacts(data)

        } catch (error) {
            console.log(error)
        }


    }
})
yargs.command({
    command: 'remove',
    alias: ['rm'],
    describe: '[remove from contact list]',
    builder: {
        id: {
            command: 'id',
            describe: '[id of contact that i want to remove]',
            demandOption: true,
            type: 'number'
        }
    },

    handler: ({ id: contactId }) => {
        try {
            const newContactsList = getAllContacts().filter(({ id }) => id !== contactId)
            const strContacts = JSON.stringify(newContactsList)
            writeFile(strContacts)
            console.log(chalk.green('contact remove successfully'))
            // console.log(contactId)

        } catch (error) {
            console.log(error)
        }


    }
})
yargs.parse()