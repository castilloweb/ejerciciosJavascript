function numeroMasGrande(numero1, numero2){
	if (isNaN(numero1) === true || isNaN(numero2) === true){
		console.log('Esta función espera valores del tipo number')
	} else{
	  	if(numero1 > numero2){
			console.log(`El número ${numero1} es mas grande que el número ${numero2}`)
		} else if(numero1 < numero2){
			console.log(`El número ${numero1} es menor que el número ${numero2}`)
		} else {
			console.log(`Los dos números son ${numero1}`)
		}
	}
}

numeroMasGrande(30,40)