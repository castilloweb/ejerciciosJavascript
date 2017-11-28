'use strict'
let listaMutantes = ['Prof. Charles Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe']

let copiaMutantes = listaMutantes

for(let x = 0; x < copiaMutantes.length; x++){
	if (copiaMutantes[x] == 'Prof. Charles Xavier') {
	copiaMutantes[x] = `<3 ${copiaMutantes[x]}`
}	else if (copiaMutantes[x] == 'James "Logan" Howlett'){
	copiaMutantes[x] = `<3 ${copiaMutantes[x]}`
}	else if(copiaMutantes[x] == 'Jean Elaine Grey'){
	copiaMutantes[x] = `<3 ${copiaMutantes[x]}`
}
}
console.log(copiaMutantes)