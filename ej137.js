'use strict'

//Array con números del 0 al 1000:
let arrayNumbers = []
for(let x = 0; x < 1000; x++){
	arrayNumbers.push(x)
}

//usando .map multiplico por 10 cada valor del array
let arrayNumberMultis = arrayNumbers.map(function(arrayNumber){
	return arrayNumber * 10
})

//Muestro el indice y los primeros 10 valores de cada array
for(let y = 0; y < 11; y++){
  console.log(`Indice: ${y}, ${arrayNumbers[y]}, ${arrayNumberMultis[y]}`)
  
}