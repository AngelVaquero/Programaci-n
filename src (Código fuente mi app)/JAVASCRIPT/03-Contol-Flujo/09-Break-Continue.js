let i = 0;
while (i < 6) {
    i++;
    if (i ===2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}
//Al estar colocado el console.log al final no imprime el valor de 2, gracias al continue por lo que podemos saltarnos ésta operación.
//Y gracias al break, parará de imprimir una vez llegue a la ejecución en la que el valor es igual a 4.

