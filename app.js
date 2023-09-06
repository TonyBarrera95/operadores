console.clear()

const { Multi } = require('./Multiplicador/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

Multi(argv.o,argv.l,argv.f,argv.s)
    .then(name => console.log(name))
    .catch(err => console.log(err.red))