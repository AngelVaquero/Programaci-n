//Short-circuit
//Valores que evalúan en false son:
//false
//0
//''
//null
//undefined
//NaN //Esto es cuando intentas realizar una operación matemática pero no es capaz de devolver un valor válido.

let Nombre = 'Cerdo Feliz'
let UserName = Nombre || 'Anónimo';
console.log(UserName);

function fn1() {
    console.log('Soy Función 1');
    return false;
}
function fn2() {
    console.log('Soy Función 2');
    return true;
}
let x = fn1() && fn2();
// Si la primera función devuelve false, sólo imprime en la consola la primera función, entonces no sería válido en el caso anterior usar &&.
//Esto nos serviría para realizar una lógica y necesitamos que una lógico haya devuelto anteriormente true.
