function CualEsMayor(a, b) {
}

let Mayor = CualEsMayor(10, 5);
    
console.log(Mayor);

// 1º Solución
function CualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let Mayor = CualEsMayor(10, 5);
    
console.log(Mayor);

// 2º Solución
function CualEsMayor(a, b) {
    return (a > b) ? a : b;
}

let Mayor = CualEsMayor(10, 5);
    
console.log(Mayor);
