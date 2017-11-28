function obtenerPerimetroRectangulo(base, altura){
	let perimetro
	if(base === altura){
		perimetro = base * 4
	} else {
		perimetro = (base * 2) + (altura * 2)
	}
	console.log(`El perimetro es ${perimetro}`)
	if(perimetro > 100){
		console.log('El perimetro es muy grande')
	} else {
		console.log('El perimetro no es muy grande')
	}
	return perimetro
}

obtenerPerimetroRectangulo(10,50)