function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let Resultado = suma(5, 6, 1, 2, 3);
console.log(Resultado);
console.log(typeof suma);
