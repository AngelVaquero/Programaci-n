let Accion = 'actualizar';

switch (Accion) {
    case 'listar': 
        console.log('Acción de listar');
        break;
    case 'Guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');
}
//Switch nos imprime el valor que queramos siempre y cuando case tenga el mismo valor que la varible creada. Sino  hay ningún valor igual a case podemos crear default para que nos imprima ese otro valor que queramos.
//Otra forma de hacerse esto con "if" y "else" sería con el siguiente ejemplo:
if (Accion == 'listar');
else if (Accion == 'guardar');