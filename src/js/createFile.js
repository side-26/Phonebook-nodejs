const fs = require('fs');
const testJson = [
    {
        id: 1,
        fullName: 'mahdi rashidi',
        email: 'mr7230@gmail.com'
    }, {
        id: 2,
        fullName: 'fatemeh rashidi',
        email: 'juggler1400@gmail.com'
    }, {
        id: 3,
        fullName: 'batool ebrahimi',
        email: 'batool@gmail.com'
    },
]

const strJson = JSON.stringify(testJson)
const createNewFile = () => {
    const dataDir = './data/data.json'
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
    }
    if(!fs.existsSync('./data/data.json'))
        fs.writeFileSync('./data/data.json',strJson)
}
createNewFile()