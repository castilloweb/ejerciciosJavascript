let fibonacci = function(){
	let numero = 30
	let f = 0
	let f1 = -1
	let f2 = 1
	while(f <numero){
	f = f1 + f2
	f1 = f2
	f2 = f
	console.log(f)
	}
}
fibonacci()
fibonacci()
fibonacci()