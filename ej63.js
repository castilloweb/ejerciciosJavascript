let anio = 2015
let campeon = null
switch(anio){
	case 2000 :
	campeon = 'River Plate (Clausura) y Boca Juniors (Apertura)'
	break;
	case 2001 :
	campeon = 'San Lorenzo de Almagro (Clausura) y Racing Club (Apertura'
	break;
	case 2002 :
	campeon = 'River Plate (Clausura) e Independiente (Apertura)'
	break;
	case 2003 :
	campeon = 'River Plate (Clausura) y Boca Juniors (Apertura)'
	break;
	case 2004 :
	campeon = 'River Plate (Clausura) y Newells Old Boys (Apertura)'
	break;
	case 2005 :
	campeon = 'Vélez Sarsfield (Clausura) y Boca Juniors (Apertura'
	break;
	case 2006 :
	campeon = 'Boca Juniors (Clausura) y Estudiantes de La Plata (Apertura)'
	break;
	case 2007 :
	campeon = 'San Lorenzo de Almagro (Clausura) y Lanus (Apertura)'
	break;
	case 2008 :
	campeon = 'River Plate (Clausura) y Boca Juniors (Apertura)'
	break;
	case 2009 :
	campeon = 'Vélez Sarsfield (Clausura) y Banfield (Apertura)'
	break;
	case 2010 :
	campeon = 'Argentinos Juniors (Clausura) y Estudiantes de La Plata (Apertura'
	break;
	case 2011 :
	campeon = 'Vélez Sarsfield (Clausura) y Boca Juniors (Apertura)'
	break;
	case 2012 :
	campeon = 'Arsenal (Clausura) y Vélez Sarsfield (Torneo Inicial)'
	break;
	case 2013 :
	campeon = 'Newells Old Boys (Torneo Final) , Vélez Sarsfield (Campeón del Campeonato de Primera División 2012/13) y San Lorenzo de Almagro (Torneo Inicial)'
	break;
	case 2014 :
	campeon = 'River Plate (Torneo Final) y Racing Club (Torneo Inicial)'
	break;
	case 2015 :
	campeon = 'Boca Juniors (Campeonato de Primera División)'
	break;
	case 2016 :
	campeon = 'Lanus (Campeonato de Primera División)'
	break;
	case 2017 :
	campeon = 'Boca Juniors (Campeon del Campeonato de Primera División 2016/17)'
	break;
	default :
	campeon = 'null'
}
if(campeon === null){
	console.log('Por favor ingrese un año entre 2000 y 2017')
} else{
	console.log(`En el año ${anio} salió campeón: ${campeon}`)
}