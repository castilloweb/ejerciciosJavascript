//La función solo recibe como parametros valores number y tienen que ser diferentes unos de otros. 


function ordenarNumeros(numero1, numero2, numero3, descendente){
	if (descendente === true){
		if(numero1 > numero2 & numero2 > numero3){
		console.log(numero1, numero2, numero3)
		} else if (numero1 > numero3 & numero3 > numero2){
		console.log(numero1, numero3, numero2)
		} else if(numero2 > numero1 & numero1 > numero3){
		console.log(numero2, numero1, numero3)
		} else if (numero2 > numero3 & numero3 > numero1){
		console.log(numero2, numero3, numero1)
		} else if (numero3 > numero1 & numero1 > numero2){
		console.log(numero3, numero1, numero2)
		} else {console.log(numero3, numero2, numero1)
		}
		} else{
			if(numero1 < numero2 & numero2 < numero3){
			console.log(numero1, numero2, numero3)
			} else if (numero1 < numero3 & numero3 < numero2){
			console.log(numero1, numero3, numero2)
			} else if(numero2 < numero1 & numero1 < numero3){
			console.log(numero2, numero1, numero3)
			} else if (numero2 < numero3 & numero3 < numero1){
			console.log(numero2, numero3, numero1)
			} else if (numero3 < numero1 & numero1 < numero2){
			console.log(numero3, numero1, numero2)
			} else {console.log(numero3, numero2, numero1)}
		}
	}

ordenarNumeros(10, 8, 25, true)
