const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    try {
        if(listar){
            console.log('===================='.green);
            console.log('     Tabla del'.green, colors.blue(base));
            console.log('===================='.green);    
        }

        let salida = '';
        let salidaConsola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            salidaConsola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
        }

        listar && console.log(salidaConsola);

        /*fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
            if(err) throw err;
            console.log(`Archivo tabla-${base}.txt creado...!`);
        });*/

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        //console.log(`Archivo tabla-${base}.txt creado...!`);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;    
    }
}

module.exports = {
    crearArchivo
}