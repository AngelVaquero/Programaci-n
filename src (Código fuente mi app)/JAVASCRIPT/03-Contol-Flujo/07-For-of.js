let Animales = ['Cerdo feliz', 'Dragón', 'Perrito'];
for (let Animal of Animales) {
    console.log(Animal);
}

let i = 0; 
while (i < Animales.length) {
    console.log(Animales[i]);
    i++;
}
//Aquí estamos realizando la misma operación que "for of" pero con While. i vale 0, y con i++ una vez haya impreso en consola que vale 0 obtendrá cerdo feliz, al sumar 1 obtendrá el siguiente elemento y así sucesivamente.
