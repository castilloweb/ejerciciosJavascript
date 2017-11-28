function esPar(numero){
	let mensajeEsPar = `${numero} es par.`
	let mensajeNoEsPar = `${numero} no es par.`
	if(numero % 2 === 0){
		console.log(mensajeEsPar)
		return true
	} else {
		console.log(mensajeNoEsPar)
		return false
	}
}
esPar(11)