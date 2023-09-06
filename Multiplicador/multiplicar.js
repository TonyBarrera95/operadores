const fs = require('fs');
const colors = require('colors')

const Multi = async (oper = 5,validador = false, NumFinal = 10, signo = '*') => {

    let salida = 'Num 1,Operador,Num 2,Resultado\n'
    let tab = true

    try {
        switch(signo){
            case '*':         
            for (i = 1; i <= NumFinal; i++) {   
                salida += (`${oper} * ${i} = ${oper * i}\n`)
            }
            break
            case '-':         
            for (i = 1; i <= NumFinal; i++) {   
                salida += (`${oper} - ${i} = ${oper - i}\n`)
            }
            break
            case '+':         
            for (i = 1; i <= NumFinal; i++) {   
                salida += (`${oper} + ${i} = ${oper + i}\n`)
            }
            break
            case '/':         
            for (i = 1; i <= NumFinal; i++) {   
                salida += (`${oper} / ${i} = ${oper / i}\n`)
            }
            break
            default : console.log(`El operador seleccionado es incorrecto, debe escoger entre ${'"+",'.yellow} ${'"-",'.yellow} ${'"*" o'.yellow} ${'"/"'.yellow}`.red)
            validador = false
            tab = false
        }

        if(validador){
            console.log('======================='.green)
            console.log(`Tabla del ${colors.bgBlue(oper)}`.yellow)
            console.log('======================='.green)

            console.log(salida)
        }

        if(tab){
            fs.writeFileSync(`./salida/Tabla-del-${oper}.txt`, salida)
            return `Tabla-del-${oper}.txt`
        }else{
            return 'La tabla no se pudo generar'
        }
    } catch (err) {
        throw err = 'Algo salió mal... ¿Qué es?... Eso si no se, preguntele al programador, no a mi';
    }
}

module.exports = {
    Multi
}

