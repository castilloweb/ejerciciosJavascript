let alumnas = ['Marta', 'Laura', 'Carla', 'Sofía', 'Debora']
let alumnos = ['Juan', 'Pedro', 'Pablo', 'Carlos', 'Martin']
let todosAlumnos = alumnas.concat(alumnos)
alumnas.forEach(function(alumna, indice){
console.log('indice', indice)
console.log(alumna)
})

let x = 0
while(x < alumnos.length){
	console.log(alumnos[x])
	x++
}

for(y = 0; y < todosAlumnos.length; y++){
  console.log(todosAlumnos[y])
}