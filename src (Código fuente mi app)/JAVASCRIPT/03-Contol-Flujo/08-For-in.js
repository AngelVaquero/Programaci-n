let User = {
    id: 1,
    name: 'Cerdo Feliz',
    age: 25,
};

for(let Propiedad in User) {
    console.log(Propiedad);
}
//Esto nos imprime en consola sus propiedades, no el valor de éstas.

//Para acceder a los valores usamos este ejemplo.
for (let Propiedad in User) {
    console.log(Propiedad, User[Propiedad])
}

//Puede haber código que tenga implementado esto anterior con for of y no con for in loop, por ejemplo:
let Animales = ['Cerdo Feliz', 'Dragón', 'Canguro'];
for (let indice in Animales) {
    console.log(indice, Animales[indice]);
}