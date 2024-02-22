// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// console.log('Fuera del While');
//Esto hace que se imprima si 0 es menor que 1, entonces dará 0. Ahora se aumentara a 1, si 1 es menor que 10 dará 1. Y asi sucesivamente hasta que no se cumpla la condición. A partir de ahí imprimirá en consola la siguiente acción.

let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
}

console.log('Fuera del While');
// Este if creado dentro de While dice que: si le sacamos el módulo i en base a 2 y este es exactamente igual a 0, esto significa que estamos trabajando con un número par.
