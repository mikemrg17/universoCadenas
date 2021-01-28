const readline = require('readline');
const fs = require('fs');
const { exit } = require('process');
//const { spawn } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(function(){
    menu1();
})();

function manual(){
    fs.createWriteStream('universo.txt');
    fs.appendFileSync('universo.txt', "U={\n", (error)=>{
        if (error) console.log(`Error: ${error}`);
    });
    rl.question('Por favor inserta una potencia ', (potencia) =>{
        let combinaciones = Math.pow(2,potencia);
        let numeroDecimal;
        let numeroBinario;
        let banderaProceso;
        for(numeroDecimal = 0; numeroDecimal <= combinaciones; numeroDecimal++){
            numeroBinario = numeroDecimal.toString(2);
            fs.appendFileSync('universo.txt',"\t" +numeroBinario + "\n", (error)=>{
                if (error) console.log(`Error: ${error}`);
            });
            console.log("numero binario: " + numeroBinario);
            banderaProceso = proceso(numeroBinario, potencia);
            if(banderaProceso == 1){
                break;
            }else{
                continue;
            }
        }
        fs.appendFile('universo.txt', "}", (error)=>{
            if (error) console.log(`Error: ${error}`);
        });
        menu2();
    });
}

function aleatoria(){
    fs.createWriteStream('universo.txt');
    fs.appendFileSync('universo.txt', "U={\n", (error)=>{
        if (error) console.log(`Error: ${error}`);
    });
    let potencia = Math.round(Math.random() * (1000-0) + 0);
    console.log(`Potencia: ${potencia}`);
    let combinaciones = Math.pow(2,potencia);
    let numeroDecimal;
    let numeroBinario;
    let banderaProceso;
    for(numeroDecimal = 0; numeroDecimal <= combinaciones; numeroDecimal++){
        numeroBinario = numeroDecimal.toString(2);
        fs.appendFileSync('universo.txt',"\t" +numeroBinario + "\n", (error)=>{
            if (error) console.log(`Error: ${error}`);
        });
        console.log("numero binario: " + numeroBinario);
        banderaProceso = proceso(numeroBinario, potencia);
        if(banderaProceso == 1){
            break;
        }else{
            continue;
        }
    }
    fs.appendFile('universo.txt', "}", (error)=>{
        if (error) console.log(`Error: ${error}`);
    });
    menu2();
}


function proceso(numeroBinario, potencia){
    let bandera;
    if(contarUnos(numeroBinario) == potencia){
        bandera = 1;
    }else{
        bandera = 0;
    }
    return bandera;
    //console.log("Numero de 1: " + contarUnos(numeroBinario));
}

function contarUnos(numeroBinario){
    let contador = 0;
    for(let i = 0; i < numeroBinario.length; i++){
        if(numeroBinario[i] == "1"){
            contador++;
        }
    }
    return contador;
}


function menu1(){
    console.log("\nBienvenido al programa del universo de cadenas");
    console.log("\t1. Ingresar potencia manualmente");
    console.log("\t2. Generar potencia aleatoria");
    console.log("\t3. Salir del programa");
    rl.question('Opción:' , (opcion) =>{
        if(opcion == 1){
            manual();
        }else if(opcion == 2){
            aleatoria();
        }else{
            exit();
        }
        //rl.close();
    });
}

function menu2(){
    console.log("\n¿Quieres volver a hacer un cálculo?");
    console.log("\t1. Si");
    console.log("\t2. No");
    rl.question('Opción:' , (opcion) =>{
        if(opcion == 1){
            menu1();
        }else{
            exit();
        }
    });
}

function datosAGraficar(){
    
}