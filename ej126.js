let gustosHelados = ['dulce de leche', 'chocolate', 'frutilla', 'frambuesa', 'menta granizada', 'banana split', 'limón', 'vainilla', 'mantecol', 'crema del cielo']

function gustosHeladosModificado(gustos, otroGusto){
	let listaInvertidaMasOtro = gustos.reverse()
	listaInvertidaMasOtro.push(otroGusto)
	
	console.log(listaInvertidaMasOtro)
	return listaInvertidaMasOtro
}
gustosHeladosModificado(gustosHelados,'cereza')
