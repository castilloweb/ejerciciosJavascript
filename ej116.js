function mejorJugadorArgentino(numeroCamiseta){
	let jugador
	switch(numeroCamiseta){
		case 18 :
			jugador = 'Nery Pumpido'
			break;
		case 5 :
			jugador = 'José Luis Brown'
			break;
		case 9 :
			jugador = 'José Cuciuffo'
			break;
		case 19 :
			jugador = 'Oscar Ruggieri'
			break;
		case 14 :
			jugador = 'Ricardo Giusti'
			break;
		case 16 :
			jugador = 'Julio Olarticoechea'
			break;
		case 2 :
			jugador = 'Sergio Batista'
			break;
		case 12 :
			jugador = 'Héctor Enrique'
			break;
		case 7 :
			jugador = 'Jorge Burruchaga'
			break;
		case 10 :
			jugador = 'Diego Armando Maradona'
			break;
		case 11 :
			jugador = 'Jorge Valdano'
			break;
		default :
			jugador = 'Carlos Bilardo'
	}
		console.log(`${numeroCamiseta}, ${jugador}`)
		return jugador
}

mejorJugadorArgentino(10)