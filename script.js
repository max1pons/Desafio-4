let usuario = 'Max';
let mensajeDeBienvenida = `Bienvenid@ ${usuario}`;
let leguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
let valor1 = 5;
let valor2 = 8;
let resultado;
let i = 0;
let cuenta = 1;
let edad = parseInt(prompt("Introduzca su edad: "));
let numero = parseInt(prompt("Piense en un numero: "));
let nota = parseInt(prompt("Cual fue tu calificacion: "));
let numeroAleatorio = Math.random();
let numeroAleatorio1a10 = Math.floor(Math.random()*10+1);
let numeroAleatorio1a1000 = Math.floor(Math.random()*1000+1);

console.log(mensajeDeBienvenida)
alert(mensajeDeBienvenida)
console.log(`Lenguaje preferido: ${leguajePreferido}`)

while (i <= 1) {
    if (i == 0) {
        resultado = valor1 + valor2;
        console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
        i++;
    } else {
        if (i == 1){
            resultado = valor1 - valor2;
            console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}`)
            i++
            break
        }
    }
}

if (edad < 18) {
    console.log("Usted es menor de edad. Este sitio se autodestruira en:");
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("KABOOOOM!!!")
} else {console.log("Buen dia Señor.")}

if (numero === 0) {
    console.log("El numero es 0");
} else {
    console.log(`El numero es ${numero > 0 ? "positivo" : "negativo"}`)
}

while (cuenta <= 10) {
   console.log(cuenta);
   cuenta++;
}

if (nota >= 7) {
    console.log(`Ha sacado un ${nota}, usted ha aprobado.`)
} else {console.log(`Ha sacado un ${nota}, usted ha reprobado.`)};


console.log(`Numero aleatorio: ${numeroAleatorio}`)
console.log(`Numero aleatorio: ${numeroAleatorio1a10}`)
console.log(`Numero aleatorio: ${numeroAleatorio1a1000}`)
