const { argv } = require('yargs')

const david = require('yargs')
    .option('o', {
        alias: 'oper',
        type: 'number',
        demandOption: true,
        describe: 'Es el operador con el que se generará la tabla de multiplicar'
    })
    .option('l', {
        alias: "listar",
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla en consola'
    })
    .option('f', {
        alias: "fin",
        type: 'number',
        default: 10,
        describe: 'Cantidad de numeros por el que se multiplicará la tabla'
    })
    .option('s', {
        alias: "signo",
        type: 'string',
        default: '*',
        describe: 'Designa la operación que quiere realizar'
    })
    
    .check((david) => {
        if (isNaN(david.o)) {
            throw 'El Oper tiene que ser un número'
        }
        return true
    })
    .argv

module.exports = argv;