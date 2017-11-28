function mostrarNumeros(inicio, fin){
	let numero
	inicio = parseInt(inicio)
	fin = parseInt(fin)
	if (isNaN.inicio === true || isNaN(fin) === true){
		console.log('Ingrese parámetros de tipo number')
	} else{
		numero = inicio
		if(inicio === fin){
			console.log('Ambos numeros son iguales, por lo que no se puede generar el listado')
		} else{
			if (inicio > fin){
				while (numero >= fin){
				console.log(numero)
				numero--
				} 
					} else {
					while(numero <= fin){
						console.log(numero)
						numero++
				} 
			}
		}
	}
}

mostrarNumeros("100",300)