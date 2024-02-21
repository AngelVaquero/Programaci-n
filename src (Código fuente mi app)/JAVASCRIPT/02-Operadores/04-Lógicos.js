// AND Devuelve un valor true si ambos valores son true o devuelve false si al menos un valor es false
let MayorEdad = false;
let Suscrito = true;
// console.log(true && true);
// console.log(false && true);
console.log('operador And', MayorEdad && Suscrito);


//OR Devuelve true si al menos uno de los valores es true. Si los dos son false será false
console.log('operador Or', MayorEdad || Suscrito);

//NOT Se expresa antes de la variable. Esto invierte el valor de una variable. En este caso es la negación de MayorEdad.
console.log('operador Not', !MayorEdad);
let SoloCátalogoInfantil = !MayorEdad;
console.log(SoloCátalogoInfantil);