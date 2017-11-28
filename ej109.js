function autenticarUsuario(usuario, password){
	let usuarioAutent = `Bienvenido ${usuario}, te estabamos esperando`
	let usuarioError = 'Por favor ingrese credenciales válidas'
	
	if(usuario === 'nacho' && password === 'Nerd1979'){
		console.log(usuarioAutent)
		return true
	} else if(usuario === 'pedro' && password === 'Batman0217'){
		console.log(usuarioAutent)
		return true
	} else if (usuario === 'marta' && password === 'Madre2312'){
		console.log(usuarioAutent)
		return true
	} else {
		console.log(usuarioError)
		return false
	}
}
autenticarUsuario('marta', 'Madre2312')