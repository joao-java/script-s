/*
var contador = 0
while (contador < 5) {
    console.log(contador);
    ++contador;
}

var contador = 0;
while (contador <  5) {
    if (contador === 3) {
        break;
    }
    console.log(contador);
    ++contador;
}

var contador = 0;
while (contador < 100) {
    if (contador % 3 === 0  && contador % 5 ===0 ) {
        console.log("PING E BONG")
    }else if (contador % 3 === 0) {
        console.log(`${contador} - PING`)
    }else if (contador % 5 === 0){
        console.log(`${contador} - BONG`)
    }
    ++contador;
} */


/*
for (var contador = 0; contador < 10; contador++) {
    console.log(contador);
}

var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13];
for (var contador = 0; contador < numerosAleatorios.length; contador++) {
console.log(`${contador} - ${numerosAleatorios[contador]}`)
}

for (var n = 0; n < 50; n++){
    if (n % 2 1== 0) {
        continue;
    }
    console.log(`utilizando continue ${n}`)
}

for (var n = 1; n <= 5; n++){
    for(var j = 1; j <= 5; j++){
        console.log(`${n} e ${j}`)
    }
}*/

//-------------------------------------AULA 2

function escreva() {
    console.log("Teste de funcoes")
}
escreva();

function soma (a , b){
    return a + b;
}
var resultado = soma(15, 20) 
console.log(resultado);