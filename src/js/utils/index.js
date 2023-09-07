const fs = require('fs');
const haveDuplicate = (contacts, fullName) => {
    const haveDuplicate=contacts.some((item) => item['fullName'] === fullName)
    return haveDuplicate
    
}
// show list command
const logContacts = (contactsArr) => {
    contactsArr.forEach(element => {
        console.log(`
        ${chalk.white('fullname')} : ${chalk.green(element?.fullName)}\n
        ${chalk.white('email')} : ${chalk.green(element?.email)}
        `)
    });
}
const writeFile = (data) => {
    fs.writeFileSync('./data/data.json', data)
}
const getAllContacts = () => {
    // const isDataHere = fs.existsSync('./data/data.json')
    const contacts = JSON.parse(fs.readFileSync('./data/data.json')) || [];
    // console.log(contacts)
    return contacts
}
module.exports = {
    haveDuplicate,
    logContacts,
    writeFile,
    getAllContacts
}