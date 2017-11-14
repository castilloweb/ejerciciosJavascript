//VERSION SWITCH

let dia = 1
let nombreDelDia = null
switch (dia){
	case 1:
	nombreDelDia = 'Lunes'
	break;
	case 2:
	nombreDelDia = 'Martes'
	break;
	case 3:
	nombreDelDia = 'Miércoles'
	break;
	case 4:
	nombreDelDia = 'Jueves'
	break;
	case 5:
	nombreDelDia = 'Viernes'
	break;
	case 6:
	nombreDelDia = 'Sábado'
	break;
	case 7:
	nombreDelDia = 'Domingo'
}
console.log(`El día seleccionado es ${nombreDelDia}.`)

//VERSION IF ELSE IF

let diaIf = 2
let nombreDelDiaIf = null
if (diaIf === 1) {
	nombreDelDiaIf = 'Lunes'
} else if (diaIf === 2) {
	nombreDelDiaIf = 'Martes'
} else if (diaIf === 3) {
	nombreDelDiaIf = 'Miercoles'
} else if (diaIf === 4) {
	nombreDelDiaIf = 'Jueves'
} else if (diaIf === 5) {
	nombreDelDiaIf = 'Viernes'
} else if (diaIf === 6) {
	nombreDelDiaIf = 'Sábado'
} else if (diaIf === 7) {
	nombreDelDiaIf = 'Domingo'
} else {
	nombreDelDiaIf = null
}
console.log(`El día seleccionado es ${nombreDelDiaIf}.`)