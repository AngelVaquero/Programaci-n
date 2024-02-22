console.log(1 | 3); //= 00000011
// Este operador usa la base binaria para poder operar. En bitwise el operador lógico or sería | y el operador and sería &. Este operador en el ejemplo anterior de console, va coger los caracteres en binario de los dos números elegidos y va a escribir un 1 siempre y cuando cualquiera de los números elegidos tenga un 1 en sus caracteres binarios, yendo uno por uno hasta completar los 8 caracteres.
console.log(1 | 4); // = 00000101
console.log(3 | 5); // = 00000111

console.log(1 & 3); // = 00000001
console.log(1 & 4); // = 00000000
console.log(3 & 5); // = 00000001
// Con & dará el resultado según los 1 que comparta en las diferentes posiciones de los caracteres binarios. Sino comparten 1 será 0