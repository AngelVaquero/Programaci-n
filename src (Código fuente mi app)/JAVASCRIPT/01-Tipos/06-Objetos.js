// Personaje de Anime
let Nombre = "Tanjiro";
let Anime = "Demon Slayer";
let Edad = 16;

let Personaje = {
    Nombre: "Tanjiro",
    Anime: "Demon Slayer",
    Edad: 16, 
};
console.log(Personaje);
console.log(Personaje["Nombre"]);

Personaje.Edad = 13;

let Llave = "Edad";
Personaje[Llave] = 16;

delete Personaje.Nombre;

console.log(Personaje);
