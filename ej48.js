let mensaje =  '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'
let pi = mensaje.substr(0,4)
pi = parseFloat(pi)
let significadoDeLaVida = mensaje.substr(37,3)
significadoDeLaVida = parseInt(significadoDeLaVida)
let resultado = pi + significadoDeLaVida
console.log(resultado)
console.log(resultado.toString() + 'es el resultado de sumar las variables pi y significadoDeLaVida')